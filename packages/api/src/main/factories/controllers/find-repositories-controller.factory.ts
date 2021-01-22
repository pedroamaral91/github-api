import { RepositoriesByLanguage } from '@/data/usecases/repositories-by-language'
import { FindRepositoriesController } from '@/presentation/controllers/find-repositories.controller'
import { api } from '@/utils/api'
import { Controller } from '@/presentation/protocols/controller'
import { AxiosHttpExceptionHandlerDecorator } from '@/main/decorators/axios-exception-handler.decorator'

export const findRepositoriesControllerFactory = (): Controller => {
  const repoByLanguage = new RepositoriesByLanguage(api)
  const controller = new FindRepositoriesController(repoByLanguage)
  return new AxiosHttpExceptionHandlerDecorator(controller)
}
