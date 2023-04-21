import { Request, Response } from 'express';

import ClientSaas from "../models/clientSass.Schema";
import User from "../models/userSchema";


export class ClientSaasController {
    get() {
        return async (req: Request, res: Response) => {
            try {
                const clients = await ClientSaas.find();
                res.send(clients).status(200);
            } catch (error) {
                res.send(error).status(500);
            }
        }
    }
    getById() {
        return async (req: Request, res: Response) => {
            return async (req: Request, res: Response) => {
                const id = req.params.id;
                try {
                    const client = await ClientSaas.findById({ _id: id });
                    res.send(client).status(200);
                } catch (error) {
                    res.send(error).status(500);
                }
            }
        }
    }
    create() {
        return async (req: Request, res: Response) => {
            try {
                const existingClient = await ClientSaas.findOne({ email: req.body.email });

                if (existingClient) {
                    return res.status(400).send({ error: 'Email está em uso' });
                }
                
                const client = req.body;
                const docs = await ClientSaas.create(client);
                const user = await User.create({
                    username: client.email,
                    password: client.password,
                    clientSaas: docs._id
                });
                res.send(docs).status(200);
            } catch (error) {
                res.send(error).status(500);
            }
        }
    }

    updated() {
        return async (req: Request, res: Response) => {
            try {
                const id = req.params.id;
                const client = req.body;

                await ClientSaas.findByIdAndUpdate({ _id: id }, client);
                res.send("Cadastro alterado").status(200);
            } catch (error) {
                res.send(error).status(500);
            }
        }
    }
}


export default new ClientSaasController();