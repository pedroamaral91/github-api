import { Controller } from '@/presentation/protocols/controller'
import { HttpResponse } from '@/presentation/protocols/http'
import { FindLanguages } from '@/data/protocols'

export class FindLanguagesController implements Controller {
  constructor (private readonly findLanguageService: FindLanguages) {}

  async handle (): Promise<HttpResponse> {
    const response = await this.findLanguageService.search()
    return {
      statusCode: 200,
      body: response
    }
  }
}
