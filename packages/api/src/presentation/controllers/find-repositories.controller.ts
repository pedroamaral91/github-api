import { Controller } from '@/presentation/protocols/controller'
import { HttpResponse } from '@/presentation/protocols/http'
import { GetRepositories } from '@/domain/usecases'

export class FindRepositoriesController implements Controller {
  constructor (private readonly findRepositoriesByLanguage: GetRepositories) {}
  async handle (request: FindRepositoriesController.Params): Promise<HttpResponse> {
    const response = await this.findRepositoriesByLanguage.find({ language: request.language, page: request.page })
    return {
      statusCode: 200,
      body: response
    }
  }
}

export namespace FindRepositoriesController {
  export type Params = {
    language: string
    page?: string
    per_page?: string
  }
  export type Result = {
    id: number
    name: string
    full_name: string
    description: string
    avatar: string
    html_url: string
  }
}
