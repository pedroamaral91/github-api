import { FindRepositoriesController } from './find-repositories.controller'
import { mockRepositoriesGithubNormalizedData } from '@/data/mocks/repositores-github-response.mock'
import { RepositoriesByLanguage } from '@/data/usecases/repositories-by-language'
import { api } from '@/utils/api'

type FindRepositoriesControllerFactory = {
  repository: RepositoriesByLanguage
  controller: FindRepositoriesController
}

const makeFindRepositoriesController = (): FindRepositoriesControllerFactory => {
  const repository = new RepositoriesByLanguage(api)
  const controller = new FindRepositoriesController(repository)
  return { controller, repository }
}

describe('Find Repositories Controller tests', () => {
  it('should return correct values and call service with correct value', async () => {
    const { controller, repository } = makeFindRepositoriesController()
    jest.spyOn(repository, 'search').mockResolvedValueOnce([mockRepositoriesGithubNormalizedData])
    const response = await controller.handle({ language: 'any_language' })
    expect(response).toMatchObject({
      statusCode: 200,
      body: [mockRepositoriesGithubNormalizedData]
    })
  })
  it('should throw if service throws', () => {
    const { controller, repository } = makeFindRepositoriesController()
    jest.spyOn(repository, 'search').mockRejectedValueOnce(new Error())
    expect(controller.handle({ language: 'any_language' })).rejects.toThrowError()
  })
})
