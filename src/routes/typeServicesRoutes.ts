import { Router } from "express";

import { TypeServicesController } from "../controller/typeServicesController";

const router = Router();

router.get("/", TypeServicesController.get);

router.post("/", TypeServicesController.create);


export default router


