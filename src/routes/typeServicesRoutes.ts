import { Router } from "express";

import { TypeServicesController } from "@src/controller/typeServicesController";

const router = Router();

router.get("/", TypeServicesController.get);

router.post("/", TypeServicesController.create);


export default router


