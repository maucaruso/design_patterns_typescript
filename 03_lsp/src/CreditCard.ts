import { NubankCard } from "./NubankCard";

export class CreditCard extends NubankCard {
  
  validate(): void {
    console.log("Verificando o limite...");
  }
  
}