import { Request } from 'express';
import * as jwt from "jsonwebtoken";
import { get } from './getToken';

export function getIdClientSaas(req:Request) {
  const token:any = get(req)  
  const decodedToken: any = jwt.verify(token, "linus-secret");
  return decodedToken?.result.clientSaas;
}