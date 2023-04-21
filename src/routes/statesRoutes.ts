import { Router } from 'express'

import { StatesController } from '../controller/statesController'

const router = Router()

router.get("/", StatesController.getStates)
router.get("/cities/:sigla", StatesController.getCities)

export default router