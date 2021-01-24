import { Controller } from '@/presentation/protocols/controller'
import { FindLanguagesController } from '@/presentation/controllers/find-languages.controller'
import { Languages } from '@/data/usecases'
import { AxiosHttpExceptionHandlerDecorator } from '@/main/decorators/axios-exception-handler.decorator'
import { GithubApi } from '../../../infra/github-api'

export const findLanguagesControllerFactory = (): Controller => {
  const githubApi = new GithubApi()
  const findLanguageService = new Languages(githubApi)
  const languageController = new FindLanguagesController(findLanguageService)
  return new AxiosHttpExceptionHandlerDecorator(languageController)
}
