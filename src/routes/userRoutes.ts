import { Router } from "express";

// import { UserController } from "../controller/userController";
import { UserController } from "@src/controller/userController";

const router = Router();

router.post('/login', UserController.login)



export default router