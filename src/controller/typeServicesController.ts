import { Request, Response } from "express";

import TypeService from "@src/models/typeServices.Schema";

export class TypeServicesController {
  static async get(req: Request, res: Response) {
    try {
      const typeServices = await TypeService.find({});
      res.send(typeServices).status(200);
    } catch (error) {
      res.send(error).status(500);
    }
  }

  static async create(req: Request, res: Response) {

    console.log(req.body)
    let typeService = new TypeService(req.body);
    try {
        await TypeService.create(typeService,(err:any,docs:any)=>{
            if(err){
              res.send({err}).status(200);
            }else{
              res.send(docs).status(200);
            }
          });
    } catch (error) {
      res.send(error).status(500);
    }
  }
}
