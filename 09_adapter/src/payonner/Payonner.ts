import { Token } from "../utils/token";
import { IPayonnerPayment } from "./IPayonnerPayment";

export class Payonner implements IPayonnerPayment {
  
  private token: Token;
  
  authToken(): Token {
    return new Token();
  }
  
  sendPayment(): void {
    this.token = this.authToken();
    console.log("TOKEN: " + this.token.getToken());
    console.log("Enviando paramentos via Payonner");
  }
  
  receivePayment(): void {
    console.log("Recebendo pagamentos via Payonner");
  }
  
}