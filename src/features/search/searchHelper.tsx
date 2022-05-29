import { components, OptionProps } from 'react-select';
import { transportationImages } from '../../constants/images';
import { DESCRIPTION, NAME, VEHICLE_MODE } from '../../constants/stopKeys';
import { IStopModel } from '../../models/stop';
import styles from './search.module.css';
import magnifying from '../../assets/images/magnifying-solid.svg';

export const CustomOption: React.FC<OptionProps<IStopModel>> = (props) => {
  const { Option } = components;

  return (
    <Option {...props}>
      <div className={styles.title}>{props.data?.[NAME]}</div>
      <div className={styles.desc}>
        <p>{`${props.data?.[DESCRIPTION]}  `}</p>

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
