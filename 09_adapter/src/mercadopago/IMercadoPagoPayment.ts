import { Token } from "../utils/token";

export interface IMercadoPagoPayment {
  
  authToken(): Token;
  enviarPagamento(): void;
  receberPagamento(): void;
  
}