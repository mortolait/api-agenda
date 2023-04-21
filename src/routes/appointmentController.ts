import { Router } from "express";

import appointmentController from "@src/controller/appointmentController";

const router = Router();
router.get("/count",appointmentController.getCount())
router.get("/",appointmentController.get());    
router.get("/:id",appointmentController.getById());
router.post("/",appointmentController.create());
router.put("/:id",appointmentController.update());
router.delete("/:id",appointmentController.delete());
 

export default router;