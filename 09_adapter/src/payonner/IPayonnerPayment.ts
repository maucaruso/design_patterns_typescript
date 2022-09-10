import { Token } from "../utils/token";

export interface IPayonnerPayment {
 
  authToken(): Token;
  sendPayment(): void;
  receivePayment(): void;
  
}