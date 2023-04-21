import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import Client from "@src/models/clientSchema";
import { get } from "@src/utils/getToken";


export class ClientController {
  static async getClients(req: Request, res: Response) {
    try {
      const token: any = get(req);
      const decodedToken: any = jwt.verify(token, "linus-secret");
      const clients = await Client.find({ clientSaas: decodedToken?.result.clientSaas });
      res.json(clients);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async getById(req: Request, res: Response) {
    const id = req.params.id;
    try {
      const client = await Client.findById({ _id: id });
      res.send(client).status(200);
    } catch (error) {
      res.status(500).send(error);
    }
  }
  static async create(req: Request, res: Response) {
    const token: any = get(req);
    const decodedToken: any = jwt.verify(token, "linus-secret");
    console.log({ decodedToken });
    const newClient = { ...req.body, clientSaas: decodedToken?.result.clientSaas };

    try {
     const createdClient = await Client.create(newClient);
      res.send(createdClient._id).status(200);
    } catch (error) {
      res.status(500);
    }
  }

  static async update(req: Request, res: Response) {
    const id = req.params.id;
    const client = req.body;

    try {
      await Client.findByIdAndUpdate({ _id: id }, client);
      res.send(client).status(200);
    } catch (error) {
      res.sendStatus(500);
    }
  }

  static async delete(req: Request, res: Response) {
    const id = req.params.id;
    try {
      await Client.findByIdAndDelete(id);
      res.send({ id: id, message: "item deleted" }).status(200);
    } catch (error) {
      res.send({ error: error }).status(500);
    }
  }
}

export default new ClientController();
