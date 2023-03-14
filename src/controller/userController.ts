import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";

import User from "@src/models/userSchema";

export class UserController {
  static async login(req: Request, res: Response) {
    const { user, password } = req.body;
    const result = await User.findOne({ user, password });
    if (result) {
      const token = jwt.sign({ result }, "linus-secret", {
        expiresIn: "24h",
      });
      res.status(200).send({ token, type: 'admin' });
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  }
}

export default new UserController();
