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
import { IStopModel } from '../models/stop';
import { isValueNeeded } from '../utils/fetchOrNot';

export const allQueries = {
  searchQuery: (name: string) => `{
    stops(name: "${name}") {
      ${STOP_ID}
      ${NAME}
      ${VEHICLE_MODE}
      ${DESCRIPTION}
    }
  }`,
  stopQuery: (id: string, state: IStopModel) => `{
    stop(id: "${id}") {
      ${isValueNeeded(state, NAME, id, STOP_ID)}
      ${isValueNeeded(state, VEHICLE_MODE, id, STOP_ID)}
      ${isValueNeeded(state, LATITUDE, id, STOP_ID)}
      ${isValueNeeded(state, LONGITUDE, id, STOP_ID)}
      ${isValueNeeded(state, DESCRIPTION, id, STOP_ID)}
      ${isValueNeeded(state, STOP_ID, id, STOP_ID)}
      ${isValueNeeded(state, ZONE_ID, id, STOP_ID)}
      ${NEXT_DEPARTURES} {
        ${REAL_TIME_DEPARTURE}
        ${SERVICE_DAY}
        ${HEAD_SIGN}
        trip {
          ${ROUTE_SHORT_NAME}
        }
      }
  
    }
  }`,
};
