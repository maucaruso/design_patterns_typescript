import { Client } from "./Client";

export class Notify {
  
  constructor(private client: Client) {}
  
  sendEmail(): boolean {
    console.log("Enviando e-mail");
    this.client.email;
    
    return true;
  }
  
}