import {
  DESCRIPTION,
  HEAD_SIGN,
  LATITUDE,
  LONGITUDE,
  NAME,
  NEXT_DEPARTURES,
  REAL_TIME_DEPARTURE,
  ROUTE_SHORT_NAME,
  SERVICE_DAY,
  STOP_ID,
  VEHICLE_MODE,
  ZONE_ID,
} from '../constants/stopKeys';

export enum VehicleMode {
  BUS = 'BUS',
  TRAM = 'TRAM',
}
export interface NextDeparture {
  [REAL_TIME_DEPARTURE]: string;
  [HEAD_SIGN]: string;
  [ROUTE_SHORT_NAME]: string;
  [SERVICE_DAY]: number;
}

export interface IStopModel {
  [NAME]?: string;
  [VEHICLE_MODE]?: VehicleMode;
  [LATITUDE]?: number;
  [LONGITUDE]?: number;
  [DESCRIPTION]: string;
  [ZONE_ID]: string;
  [STOP_ID]?: string;
  [NEXT_DEPARTURES]: NextDeparture[];
}

export const initialStop: IStopModel = {
  [NEXT_DEPARTURES]: [],
  [DESCRIPTION]: '',
  [ZONE_ID]: '',
  [NAME]: '',
  [VEHICLE_MODE]: undefined,
  [LATITUDE]: undefined,
  [LONGITUDE]: undefined,
  [STOP_ID]: '',
};

export type IStopOption = Pick<
  IStopModel,
  'name' | 'gtfsId' | 'vehicleMode' | 'desc'
>;
