import { IVehicleCar } from "./IVehicleCar";

export class Car implements IVehicleCar {
  
  constructor(
    color: string,
    year: number,
    engine: number,
    seats: number,
    doors: number
  ) {
    this.configure(color, year, engine, seats, doors);
  }
  
  startVehicle(): void {
    console.log("Ligando os motores.");
  }
  
  configure(color: string, year: number, engine: number, seats: number, doors: number): void {
    console.log(`Criando um carro: ${color} cor, ${year} ano, ${engine} potência, ${doors} portas ${seats} assentos`);
    
    this.startVehicle();
  }
  
}