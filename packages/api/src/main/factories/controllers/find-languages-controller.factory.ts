import { Controller } from '@/presentation/protocols/controller'
import { FindLanguagesController } from '@/presentation/controllers/find-languages.controller'
import { api } from '@/utils/api'
import { Languages } from '@/data/usecases'
import { AxiosHttpExceptionHandlerDecorator } from '@/main/decorators/axios-exception-handler.decorator'

export const findLanguagesControllerFactory = (): Controller => {
  const findLanguageService = new Languages(api)
  const languageController = new FindLanguagesController(findLanguageService)
  return new AxiosHttpExceptionHandlerDecorator(languageController)
}
