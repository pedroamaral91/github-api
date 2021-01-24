import { Controller } from '@/presentation/protocols/controller'
import { HttpResponse } from '@/presentation/protocols/http'
import { GetLanguages } from '@/domain/usecases'

export class FindLanguagesController implements Controller {
  constructor (private readonly findLanguageService: GetLanguages) {}

  async handle (): Promise<HttpResponse> {
    const response = await this.findLanguageService.search()
    return {
      statusCode: 200,
      body: response
    }
  }
}
