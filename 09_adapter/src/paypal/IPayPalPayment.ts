import { Token } from "../utils/token";

export interface IPayPalPayment {
  
  authToken(): Token;
  paypalPayment(): void;
  paypalReceive(): void;
  
}