import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";

import User from "@src/models/userSchema";

export class UserController {
  static async login(req: Request, res: Response) {
    const { user, password } = req.body;
    console.log({user})
    console.log({password})
    let result = await User.find({ user: user, password: password });

    console.log({result})

    if (result.length > 0) {
      const token = jwt.sign({ user, password }, "linus-secret", {
        expiresIn: "24h",
      });
      res.send({token:token,type:'admin'}).status(200)
    } else {
      res.sendStatus(401).json({ message: "Unauthorized" });
    }
  }
}
export default new UserController();
