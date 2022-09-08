import { IVehicle } from "./IVehicke";

export interface IVehicleCar extends IVehicle {
  
  configurationCar(
    color: string,
    year: number,
    engine: number,
    seats: number
  ): void;
  
}