import { Controller } from '@/presentation/protocols/controller'
import { HttpResponse } from '@/presentation/protocols/http'
import { FindRepositoriesByLanguage } from '@/data/protocols'

export class FindRepositoriesController implements Controller {
  constructor (private readonly findRepositoriesByLanguage: FindRepositoriesByLanguage) {}
  async handle (request: FindRepositoriesController.Params): Promise<HttpResponse> {
    const response = await this.findRepositoriesByLanguage.search(request.language, request.page, request.per_page)
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
