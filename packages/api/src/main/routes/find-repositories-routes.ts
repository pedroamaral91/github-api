
import { Router } from 'express'
import { findRepositoriesControllerFactory } from '../factories'
import { expressRouteAdapter } from '../adapters/express-route-adapter'

export default (router: Router): void => {
  router.get('/repositories', expressRouteAdapter(findRepositoriesControllerFactory()))
}
