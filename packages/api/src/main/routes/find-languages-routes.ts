
import { Router } from 'express'
import { findLanguagesControllerFactory } from '../factories'
import { expressRouteAdapter } from '../adapters/express-route-adapter'

export default (router: Router): void => {
  router.get('/languages', expressRouteAdapter(findLanguagesControllerFactory()))
}
