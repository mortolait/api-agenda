import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";

import Professional from "@src/models/professionalSchema";
import { get } from "@src/utils/getToken";
import { getIdClientSaas } from "@src/utils/getIdClientSaas"
export class professionalController {
  static async get(req: Request, res: Response) {
    try {
      const idClientSaas = getIdClientSaas(req);
      const professionals = await Professional.find({ clientSaas:idClientSaas });
      res.send(professionals).status(200);
    } catch (error) {
      res.send(error).status(500);
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const professional = await Professional.findById({ _id: id });
      res.send(professional).status(200);
    } catch (error) {
      res.send(error).status(500);
    }
  }
  static async update(req: Request, res: Response) {
    try {
      const id = req.params.id
      const professional = req.body
      await Professional.findByIdAndUpdate({ _id: id }, professional)
      res.send("Cadastro alterado").status(200)
    } catch (error) {
      res.send(error).status(500)
    }
  }

  static async create(req: Request, res: Response) {
    try {
      const idClientSaas = await getIdClientSaas(req);
      console.log({idClientSaas});
      const professional = { ...req.body, clientSaas: idClientSaas };

      console.log({teste:professional});

      await Professional.create(professional, (err: any, docs: any) => {
        if (err) {
          res.send({ err }).status(500);
        } else {
          res.send(docs).status(200);
        }
      });

    } catch (error) {
      res.send(error).status(500);
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const id = req.params.id;
      await Professional.findByIdAndDelete(id);
      res.send({ message: 'Professional is deleted !' }).status(200);
    } catch (error) {
      res.send(error).status(500);
    }
  }

}

export default new professionalController();
