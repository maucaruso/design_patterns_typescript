import { IVehicleMotorcycle } from "./IVehicleMotorcycle";

export class Motorcycle implements IVehicleMotorcycle {
  
  constructor(
    color: string,
    year: number,
    engine: number
  ) {
    this.cofigurationMotorcycle(color, year, engine);
  }
  
  startVehicle(): void {
    console.log("Ligando os motores");
  }
  
  cofigurationMotorcycle(color: string, year: number, engine: number): void {
    console.log(`Uma moto da cor ${color}, do ano ${year}, com ${engine} cilindradas`);
    
    this.startVehicle();
  }
  
}