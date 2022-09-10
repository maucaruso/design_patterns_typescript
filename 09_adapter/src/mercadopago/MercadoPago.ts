import { Token } from "../utils/token";
import { IMercadoPagoPayment } from "./IMercadoPagoPayment";

export class MercadoPago implements IMercadoPagoPayment {
  
  private token: Token;
  
  authToken(): Token {
    return new Token();
  }
  
  enviarPagamento(): void {
    this.token = this.authToken();
    console.log("TOKEN: " + this.token.getToken());
    console.log("Enviando paramentos via MercadoPago");
  }
  
  receberPagamento(): void {
    console.log("Recebendo pagamentos via MercadoPago");
  }
  
}