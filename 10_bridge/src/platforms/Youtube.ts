import { IPlatform } from "./IPlatform";

export class Youtube implements IPlatform {
  
  constructor() {
    this.configureRMTP();
    console.log("Youtube: Transmissão iniciada!");
  }
  
  configureRMTP(): void {
    this.authToken();
    console.log("Youtube: Configurando o broadcasting");
  }
  
  authToken(): void {
    console.log("Youtube: Autorizando a aplicação!");
  }
  
}