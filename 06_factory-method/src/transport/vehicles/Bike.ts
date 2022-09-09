import { IVehicle } from "./interfaces/IVehicle";

export class Bike implements IVehicle {
  
  startRoute(): void {
    this.getCargo();
    console.log("Iniciando a entrega");
  }
  
  getCargo(): void {
    console.log("Já pegamos a encomenda")
  }
  
}