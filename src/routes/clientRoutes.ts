import { Router } from "express";

import { ClientController } from "../controller/clientController";

const router = Router();

router.get("/", ClientController.getClients);
router.get("/:id", ClientController.getById);
router.post("/", ClientController.create);
router.put("/:id", ClientController.update);
router.delete("/:id", ClientController.delete)


export default router;
