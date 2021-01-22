/**
 * Defines the base Nest HTTP exception, which is handled by the default
 * Exceptions Handler.
 *
 * @see [Base Exceptions](https://docs.nestjs.com/exception-filters#base-exceptions)
 *
 * @publicApi
 */
export class HttpException extends Error {
  private readonly response
  private readonly status
  constructor (response: string, status: number) {
    super()
    this.response = response
    this.status = status
  }
}
