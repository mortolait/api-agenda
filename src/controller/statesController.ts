import { Request, Response } from "express";

import State from "../models/states.Schema";

export class StatesController {

  static async getStates(req: Request, res: Response) {
    try {
      const states = await State.find({},{sigla:1,nome:1});
      res.send(states).status(200);
    } catch (error) {
      res.send(error).status(500);
    }
  }

  static async getCities(req: Request, res: Response){
    const sigla = req.params.sigla
    try {
        const cities = await State.find({sigla:sigla},{cidades:1})
        res.send(cities).status(200)
    } catch (error) {
        res.send(error).status(500)
    }
  }
}
