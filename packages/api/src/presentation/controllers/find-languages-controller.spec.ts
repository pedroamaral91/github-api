import { FindLanguagesController } from './find-languages.controller'
import { GetLanguages } from '@/domain/usecases'
import { GetLanguagesSpy, mockLanguageResponse } from '../mocks/get-language.mock'

type FindRepositoriesControllerFactory = {
  getLanguages: GetLanguages
  controller: FindLanguagesController
}

const makeFindRepositoriesController = (): FindRepositoriesControllerFactory => {
  const getLanguages = new GetLanguagesSpy()
  const controller = new FindLanguagesController(getLanguages)
  return { controller, getLanguages }
}

describe('Find Languages Controller tests', () => {
  it('should return correct values', async () => {
    const { controller, getLanguages } = makeFindRepositoriesController()
    jest.spyOn(getLanguages, 'search').mockResolvedValueOnce(mockLanguageResponse())
    const response = await controller.handle()
    expect(response).toMatchObject({
      statusCode: 200,
      body: mockLanguageResponse()
    })
  })
  it('should throw if service throws', () => {
    const { controller, getLanguages } = makeFindRepositoriesController()
    jest.spyOn(getLanguages, 'search').mockRejectedValueOnce(new Error())
    expect(controller.handle()).rejects.toThrowError()
  })
})
