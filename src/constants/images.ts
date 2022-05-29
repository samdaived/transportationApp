import bus from '../assets/images/bus-solid.svg';
import tram from '../assets/images/tram-solid.svg';
import { VehicleMode } from '../models/stop';

export const transportationImages: { [K in VehicleMode]: string } = {
  [VehicleMode.BUS]: bus,
  [VehicleMode.TRAM]: tram,
};
