import { IDbProduct } from "./IDbProduct";

export class MySQLProduct implements IDbProduct {

  getProductById(productId: number): string {
    return `MySQL: Exibindo dados do produto: ${productId}`;
  }
  
}