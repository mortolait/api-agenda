import { Router } from "express";

import { professionalController } from "@src/controller/professionalController";

const router = Router()

router.get("/",professionalController.get)
router.get("/:id",professionalController.getById)
router.post("/",professionalController.create)
router.put('/:id', professionalController.update)
router.delete('/:id', professionalController.delete)

export default router
