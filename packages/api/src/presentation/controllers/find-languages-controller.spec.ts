import { FindLanguagesController } from './find-languages.controller'
import { mockGithubLanguages } from '@/data/mocks/repositores-github-response.mock'
import { Languages } from '@/data/usecases'
import { api } from '@/utils/api'

type FindRepositoriesControllerFactory = {
  repository: Languages
  controller: FindLanguagesController
}

const makeFindRepositoriesController = (): FindRepositoriesControllerFactory => {
  const repository = new Languages(api)
  const controller = new FindLanguagesController(repository)
  return { controller, repository }
}

describe('Find Languages Controller tests', () => {
  it('should return correct values', async () => {
    const { controller, repository } = makeFindRepositoriesController()
    jest.spyOn(repository, 'search').mockResolvedValueOnce([mockGithubLanguages])
    const response = await controller.handle()
    expect(response).toMatchObject({
      statusCode: 200,
      body: [mockGithubLanguages]
    })
  })
  it('should throw if service throws', () => {
    const { controller, repository } = makeFindRepositoriesController()
    jest.spyOn(repository, 'search').mockRejectedValueOnce(new Error())
    expect(controller.handle()).rejects.toThrowError()
  })
})
