import { IPlatform } from "./IPlatform";

export class Facebook implements IPlatform {
  
  constructor() {
    this.configureRMTP();
    console.log("Facebook: Transmissão iniciada!");
  }
  
  configureRMTP(): void {
    this.authToken();
    console.log("Facebook: Configurando o broadcasting");
  }
  
  authToken(): void {
    console.log("Facebook: Autorizando a aplicação!");
  }
  
}