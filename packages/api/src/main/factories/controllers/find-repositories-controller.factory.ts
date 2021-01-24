import { RepositoriesByLanguage } from '@/data/usecases/repositories-by-language'
import { FindRepositoriesController } from '@/presentation/controllers/find-repositories.controller'
import { Controller } from '@/presentation/protocols/controller'
import { AxiosHttpExceptionHandlerDecorator } from '@/main/decorators/axios-exception-handler.decorator'
import { GithubApi } from '../../../infra/github-api'

export const findRepositoriesControllerFactory = (): Controller => {
  const githubApi = new GithubApi()
  const repoByLanguage = new RepositoriesByLanguage(githubApi)
  const controller = new FindRepositoriesController(repoByLanguage)
  return new AxiosHttpExceptionHandlerDecorator(controller)
}
