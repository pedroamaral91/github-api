import { Controller } from '@/presentation/protocols/controller'
import { HttpResponse } from '@/presentation/protocols/http'

export class AxiosHttpExceptionHandlerDecorator implements Controller {
  constructor (
    private readonly controller: Controller
  ) {}

  async handle (request: any): Promise<HttpResponse> {
    try {
      return await this.controller.handle(request)
    } catch (err) {
      const statusCode = err?.response?.status ?? 500
      const response = { status: statusCode, error: err?.response?.data?.errors ?? 'INTERNAL SERVER ERROR' }
      return { statusCode, body: response }
    }
  }
}
