import { HttpException } from './error'

export class MISSING_PARAM_ERROR extends HttpException {
  constructor (param: string) {
    super(`Missing param error: ${param}`, 400)
    this.name = 'MISSING_PARAM_ERROR'
  }
}
