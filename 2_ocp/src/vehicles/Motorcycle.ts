import { IVehicleMotorcycle } from "./IVehicleMotorcycle";

export class Motorcycle implements IVehicleMotorcycle {
  
  constructor(
    color: string,
    year: number,
    engine: number
  ) {
    this.configure(color, year, engine);
  }
  
  startVehicle(): void {
    console.log("Ligando os motores.");
  }
  
  configure(color: string, year: number, engine: number): void {
    console.log(`Criando uma moto: ${color} cor, ${year} ano, ${engine} cilindradas`);
    
    this.startVehicle();
  }
  
}