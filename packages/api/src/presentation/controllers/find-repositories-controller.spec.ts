import { FindRepositoriesController } from './find-repositories.controller'
import { GetRepositories } from '@/domain/usecases'
import { GetRepositoriesSpy, mockRepositoriesResponse } from '../mocks/get-repositories.mock'

type FindRepositoriesControllerFactory = {
  getRepositories: GetRepositories
  controller: FindRepositoriesController
}

const makeFindRepositoriesController = (): FindRepositoriesControllerFactory => {
  const getRepositories = new GetRepositoriesSpy()
  const controller = new FindRepositoriesController(getRepositories)
  return { controller, getRepositories }
}

describe('Find Repositories Controller tests', () => {
  it('should return correct values and call service with correct value', async () => {
    const { controller, getRepositories } = makeFindRepositoriesController()
    jest.spyOn(getRepositories, 'find').mockResolvedValueOnce(mockRepositoriesResponse())
    const response = await controller.handle({ language: 'any_language' })
    expect(response).toMatchObject({
      statusCode: 200,
      body: mockRepositoriesResponse()
    })
  })
  it('should throw if service throws', () => {
    const { controller, getRepositories } = makeFindRepositoriesController()
    jest.spyOn(getRepositories, 'find').mockRejectedValueOnce(new Error())
    expect(controller.handle({ language: 'any_language' })).rejects.toThrowError()
  })
})
