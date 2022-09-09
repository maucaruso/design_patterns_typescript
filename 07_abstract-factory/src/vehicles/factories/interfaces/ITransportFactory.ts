import { IAircraft } from "../../aerial/interfaces/IAircraft";
import { ILandVehicle } from "../../land/interfaces/ILandVehicle";

export interface ITransportFactory {
  
  createTransportVehicle(): ILandVehicle;
  createTransportAircraft(): IAircraft;
  
}