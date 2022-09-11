import { IPlatform } from "./IPlatform";

export class Twitch implements IPlatform  {
  
  constructor() {
    this.configureRMTP();
    console.log("Twitch: Transmissão iniciada!");
  }
  
  configureRMTP(): void {
    this.authToken();
    console.log("Twitch: Configurando o broadcasting");
  }
  
  authToken(): void {
    console.log("Twitch: Autorizando a aplicação!");
  }
  
}