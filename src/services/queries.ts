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

export const allQueries = {
  searchQuery: (name: string) => `{
    stops(name: "${name}") {
      ${STOP_ID}
      ${NAME}
      ${VEHICLE_MODE}
      ${DESCRIPTION}
    }
  }`,
  stopQuery: (id: string) => `{
    stop(id: "${id}") {
      ${NAME}
      ${VEHICLE_MODE}
      ${LATITUDE}
      ${LONGITUDE}
      ${DESCRIPTION}
      ${STOP_ID}
      ${ZONE_ID} 
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
