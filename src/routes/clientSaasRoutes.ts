import { Router } from 'express'

import clientSaasController from "../controller/clientSaasController";

const router = Router();

router.get("/", clientSaasController.get());
router.get("/:id", clientSaasController.getById());
router.post("/", clientSaasController.create());
router.put("/:id", clientSaasController.updated());


export default router;

