import { Request, Response } from "express";

export function get(req: Request) {
     return req.headers["x-access-token"];
}