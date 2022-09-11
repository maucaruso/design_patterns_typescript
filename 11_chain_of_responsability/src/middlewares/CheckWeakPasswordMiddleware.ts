import chalk from "chalk";
import { Middleware } from "./Middleware";

export class CheckWeakPasswordMiddleware extends Middleware {
  
  public check(email: string, password: string): boolean {
    
    if (password === "123456") {
      console.log(chalk.yellow("Sua senha é fraca"));
    }
    
    return this.checkNext(email, password);
    
  }
  
}