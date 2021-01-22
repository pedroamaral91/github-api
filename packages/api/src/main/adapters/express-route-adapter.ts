import { Controller } from '@/presentation/protocols/controller'
import { Request, Response } from 'express'

export const expressRouteAdapter = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const params = { ...req.body, ...req.params, ...req.query }
    const response = await controller.handle(params)
    res.status(response.statusCode).json(response.body)
  }
}
