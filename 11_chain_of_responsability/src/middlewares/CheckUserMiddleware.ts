import chalk from "chalk";
import { DataBase } from "../servers/DataBase";
import { Middleware } from "./Middleware";

export class CheckUserMiddleware extends Middleware {
  
  public check(email: string, password: string): boolean {
    
    if (!email.includes("@")) {
      console.error(chalk.red("E-mail inválido"));
      return false;
    }
    
    if (!DataBase.filter(item => item.email === email && item.password === password).length) {
      console.log(chalk.red("E-mail e/ou senha inválidos."));
      return false;
    }
    
    return this.checkNext(email, password);
    
  }
  
}