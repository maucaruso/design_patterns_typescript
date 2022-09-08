export interface IVehicleMotorcycle {
  startVehicle(): void;
  configure(
    color: string,
    year: number,
    engine: number
  ): void;
}