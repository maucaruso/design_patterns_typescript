import { IVehicle } from "./vehicles/interfaces/IVehicle";

export abstract class Transport {
  
  startTransport(): void {
    
    const vehicle = this.createTransport();
    
    vehicle.startRoute();
    
  }
  
  protected abstract createTransport(): IVehicle;
  
}