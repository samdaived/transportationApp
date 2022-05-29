import { Dispatch, useEffect, useState } from 'react';
import { components, MultiValue, OptionProps, SingleValue } from 'react-select';
import magnifying from '../../assets/images/magnifying-solid.svg';
import { transportationImages } from '../../constants/images';
import {
  DESCRIPTION,
  NAME,
  STOP_ID,
  VEHICLE_MODE,
} from '../../constants/stopKeys';
import { IStopOption } from '../../models/stop';
import { FetchStopsData } from '../../services/appService';
import {
  getSetStopDetail,
  setStopInitial,
  StopDispatch,
} from '../../state/stop/actions';
import styles from './search.module.css';

export const CustomOption: React.FC<OptionProps<IStopOption>> = (props) => {
  const { Option } = components;

  return (
    <Option {...props}>
      <div className={styles.title}>{props.data?.[NAME]}</div>
      <div className={styles.desc}>
        <p>{`${props.data?.[DESCRIPTION] || ''}`}</p>

        {props.data?.[VEHICLE_MODE] ? (
          <img
            src={transportationImages[props.data?.[VEHICLE_MODE]!]}
            className={styles.icon}
            alt={props?.data?.[VEHICLE_MODE] || ''}
          ></img>
        ) : null}
      </div>
    </Option>
  );
};

export const Placeholder = (
  <div className={styles.placeHolder}>
    <p>Search</p>
    <img src={magnifying} className={styles.icon} alt="search"></img>
  </div>
);

export const chooseValue = <T extends {}>(obj: T, key: keyof T): string => {
  return `${obj[key] || ''}`;
};

export const onSelectedValue = (
  v: MultiValue<IStopOption> | SingleValue<IStopOption>,
  dispatch: StopDispatch
) => {
  if (!v) {
    dispatch(setStopInitial());
    return;
  }
  if (v instanceof Array) {
    return;
  }
  dispatch(getSetStopDetail(v?.[STOP_ID]));
};

export const UseOptionLoader = (v: string) => {
  const [options, setOptions] = useState<IStopOption[]>([]);
  const [loading, setloading] = useState<boolean>(false);

  useEffect(() => {
    let mount = true;
    setloading(true);
    const timeId = setTimeout(
      () =>
        FetchStopsData(v).then((res) => {
          setloading(false);
          if (res && mount) {
            setOptions(res);
          }
        }),
      500
    );

    return () => {
      mount = false;
      setloading(false);
      clearTimeout(timeId);
    };
  }, [v]);

  return { options, loading };
};
