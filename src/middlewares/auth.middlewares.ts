import * as jwt from "jsonwebtoken";
import { Request, Response } from "express";
const secret = "linus-secret";

class Auth {
  validate(req: Request, res: Response, next: any):any {
    const token: any = req.headers["x-access-token"];

    if (token) {
      jwt.verify(token, secret, (err: any, decode: any):any => {
        if (err) {
          return res.status(403).send({
            success: false,
            message: "403 - Token Invalido",
          });
        } else {
          next();
        }
      });
    } else {
      return res.status(401).send({
        success: false,
        message: "401 - unauthorized",
      });
    }
  }
}

export default new Auth();
