import { IAircraft } from "./interfaces/IAircraft";

export class Drone implements IAircraft {
  
  startRoute(): void {
    this.checkWind();
    this.getCargo();
    console.log("Iniciando entrega aérea");
  }
  
  getCargo(): void {
    console.log("Pegando a encomenda");
  }
  
  checkWind(): void {
    console.log("Ventos a 25km, ventos ok!");
  }
  
}