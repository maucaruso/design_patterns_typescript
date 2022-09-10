import { IPayPalPayment } from "../paypal/IPayPalPayment";
import { Token } from "../utils/token";
import { MercadoPago } from "../mercadopago/MercadoPago";

export class MercadoPagoAdapter implements IPayPalPayment {
  
  constructor(private mercadopago: MercadoPago) {
    console.log("Adaptand o MercadoPago utilizando métodos e padrões do PayPal");
  }
  
  authToken(): Token {
    return this.mercadopago.authToken();
  }
  
  paypalPayment(): void {
    return this.mercadopago.enviarPagamento();
  }
  
  paypalReceive(): void {
    return this.mercadopago.receberPagamento();
  }
  
}