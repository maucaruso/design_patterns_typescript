import { IPlatform } from "../platforms/IPlatform";
import { Live } from "./Live";

export class AdvancedLive extends Live {
  
  constructor(platform: IPlatform) {
    super(platform);
  }
  
  subtitles(): void {
    console.log("Legendar ativadas na Transmissão!");
  }
  
  comments(): void {
    console.log("Comentários liberados na Live!");
  }
  
}