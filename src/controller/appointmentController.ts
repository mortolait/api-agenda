import { Request, Response } from "express";
import Appointment from "@src/models/appointment.Schema";
import { get } from "@src/utils/getToken";
import { getIdClientSaas } from "@src/utils/getIdClientSaas";

export class AppointmentController {
  get() {
    return async (req: Request, res: Response) => {
      const clientIdSaas = getIdClientSaas(req);

      try {
        const appointments = await Appointment.find({ clientSaas: clientIdSaas })
          .populate("professional")
          .populate("client")
          .populate("service")


        res.send(appointments).status(200);
      } catch (error) {
        res.send(error).status(500);
      }
    };
  }
  getById() {
    return async (req: Request, res: Response) => {
      try {
        const id = req.params.id;
        const appointment = await Appointment.findById({ _id: id })

        res.send(appointment).status(200);
      } catch (error) {
        res.send(error).status(500);
      }
    };
  }
  update() {
    return async (req: Request, res: Response) => {
      try {
        const id = req.params.id;
        const appointment = req.body;
        await Appointment.findByIdAndUpdate({ _id: id }, appointment);
        res.send("Cadastro alterado").status(200);
      } catch (error) {
        res.send(error).status(500);
      }
    };
  }
  create() {
    return async (req: Request, res: Response) => {
      try {
        const clientIdSaas = getIdClientSaas(req);

        const appointment = { ...req.body, clientSaas: clientIdSaas };

        await Appointment.create(appointment, (err: any, docs: any) => {
          if (err) {
            res.send({ err }).status(500);
          } else {
            res.send(docs).status(200);
          }
        });
      } catch (error) {
        res.send(error).status(500);
      }
    };
  }
  delete() {
    return async (req: Request, res: Response) => {
      try {
        const id = req.params.id;
        await Appointment.findByIdAndDelete(id);
        res.send({ message: "Registro apagado !" }).status(200);
      } catch (error) {
        res.send(error).status(500);
      }
    };
  }
}

export default new AppointmentController();
