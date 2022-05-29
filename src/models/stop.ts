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
}
export interface NextDepartureRecived extends NextDeparture {
  [SERVICE_DAY]: number;
}

export interface IStopModel {
  [NAME]: string | null;
  [VEHICLE_MODE]: VehicleMode | null;
  [LATITUDE]: number | null;
  [LONGITUDE]: number | null;
  [DESCRIPTION]: string;
  [ZONE_ID]: string;
  [STOP_ID]: string | null;
  [NEXT_DEPARTURES]: NextDeparture[];
}

export const initialStop: IStopModel = {
  [STOP_ID]: null,
  [NAME]: null,
  [VEHICLE_MODE]: null,
  [LATITUDE]: null,
  [LONGITUDE]: null,
  [NEXT_DEPARTURES]: [],
  [DESCRIPTION]: '',
  [ZONE_ID]: '',
};
