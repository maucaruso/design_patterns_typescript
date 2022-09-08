import { dbProductFactory } from "../factory/DbProductFactory";
import { MySQLProduct } from "../model/MySQLProduct";

export class Payment {
  
  pay(productId: number): void {
    
    const dbProduct = dbProductFactory.create();
    const product = dbProduct.getProductById(productId);
    
    console.log(product);
    
  }
  
}