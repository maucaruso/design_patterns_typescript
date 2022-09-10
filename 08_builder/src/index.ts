import { Director } from "./director/Director";
import { VehicleBuilder } from "./builders/VehicleBuilder";
import { Vehicle } from "./products/Vehicle";

const builder: VehicleBuilder = new VehicleBuilder();
const director: Director = new Director(builder);

director.constructSedanCar();

const sedan: Vehicle = builder.getVehicle();

console.log(`Criando veículo do tipo ${sedan.vehicleType} com ${sedan.wheelsTotal} rodas.`);

director.constructTruck();

const truck: Vehicle = builder.getVehicle();

console.log(`Criando veículo do tipo ${truck.vehicleType} com ${truck.wheelsTotal} rodas.`);

director.constructMotorcycle();

const motorcycle: Vehicle = builder.getVehicle();

console.log(`Criando veículo do tipo ${motorcycle.vehicleType} com ${motorcycle.wheelsTotal} rodas.`)