import { Token } from "../utils/token";
import { IPayPalPayment } from "./IPayPalPayment";

export class PayPal implements IPayPalPayment {
  
  private token: Token;
  
  authToken(): Token {
    return new Token();
  }
  
  paypalPayment(): void {
    this.token = this.authToken();
    console.log("TOKEN: " + this.token.getToken());
    console.log("Enviando paramentos via PayPal");
  }
  
  paypalReceive(): void {
    console.log("Recebendo pagamentos via PayPal");
  }
  
}