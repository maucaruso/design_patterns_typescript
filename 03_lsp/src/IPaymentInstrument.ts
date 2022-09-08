export interface IPaymentInstrument {
  validate(): void;
  collectPayment(): void; 
}