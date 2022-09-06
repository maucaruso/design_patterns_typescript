import { IVehicle } from "./IVehicke";

export interface IVehicleMotorcycle extends IVehicle {

  cofigurationMotorcycle(
    color: string,
    year: number,
    engine: number
  ): void;
  
}