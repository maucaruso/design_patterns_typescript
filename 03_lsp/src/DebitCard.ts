import { NubankCard } from "./NubankCard";

export class DebitCard extends NubankCard {
  
  validate(): void {
    console.log("Validar se há saldo suficiente...");
  }
  
}