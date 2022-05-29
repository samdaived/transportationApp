import React from 'react';
import { useSelector } from 'react-redux';
import Map from '../../components/map/map';
import { transportationImages } from '../../constants/images';
import {
  DESCRIPTION,
  HEAD_SIGN,
  LATITUDE,
  LONGITUDE,
  NAME,
  NEXT_DEPARTURES,
  REAL_TIME_DEPARTURE,
  ROUTE_SHORT_NAME,
  STOP_ID,
  VEHICLE_MODE,
  ZONE_ID,
} from '../../constants/stopKeys';
import { RootState } from '../../state/rootReducer';
import refresh from '../../assets/images/refresh-solid.svg';

import styles from './stopCard.module.css';

const StopCard: React.FC = () => {
  const { currentStop } = useSelector((state: RootState) => state.stop);

  return (
    <>
      {console.log(currentStop)}
      {currentStop?.[STOP_ID] && currentStop?.[VEHICLE_MODE] ? (
        <div className={styles.container}>
          <img src={refresh} className={styles.refresh} alt={'refresh'}></img>
          <div className={styles.map}>
            <Map lat={currentStop?.[LATITUDE]} lon={currentStop?.[LONGITUDE]} />
          </div>
          <div className={styles.details}>
            <img
              src={transportationImages[currentStop?.[VEHICLE_MODE]!]}
              className={styles.icon}
              alt={currentStop?.[VEHICLE_MODE] || ''}
            ></img>
            <h3>{currentStop?.[NAME]}</h3>
            <p>
              {currentStop?.[DESCRIPTION]}, Zone: {currentStop?.[ZONE_ID]}
            </p>
            <div className={styles.newDepatruture}>
              {currentStop?.[NEXT_DEPARTURES].map((el, indx) => (
                <div key={indx}>
                  {el[REAL_TIME_DEPARTURE]}, {el[HEAD_SIGN]},{' '}
                  {el[ROUTE_SHORT_NAME]}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default StopCard;
