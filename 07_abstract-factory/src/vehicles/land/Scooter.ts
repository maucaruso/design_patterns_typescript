import { ILandVehicle } from "./interfaces/ILandVehicle";

export class Scooter implements ILandVehicle {
  
  startRoute(): void {
    this.getCargo();
    console.log("Patinando até o destinatário");
  }
  
  getCargo(): void {
    console.log("Já pegamos o pedido.");
  }
  
}