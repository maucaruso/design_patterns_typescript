import { IPlatform } from "../platforms/IPlatform";
import { ITransmission } from "./ITransmission";

export class Live implements ITransmission {
  
  constructor(private platform: IPlatform) {}
  
  broadcasting(): void {
    console.log("Iniciando a transmissão");
  }
  
  result(): void {
    console.log("***** ON AIR *****");
  }
  
}