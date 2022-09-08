import { IDbProduct } from "../model/IDbProduct";
import { Db } from '../model/Db';
import { MySQLProduct } from "../model/MySQLProduct";
import { MongoDBProduct } from "../model/MongoDBProduct";

export class dbProductFactory {
  
  private static type: Db = Db.MYSQL;
  
  public static create(): IDbProduct {
    
    if (dbProductFactory.type === Db.MYSQL) {
      return new MySQLProduct();
    } else if (dbProductFactory.type === Db.MONGODB) {
      return new MongoDBProduct();
    }
    
    return new MongoDBProduct();
  }
  
}