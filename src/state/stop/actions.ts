import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import {
  NEXT_DEPARTURES,
  REAL_TIME_DEPARTURE,
  SERVICE_DAY,
} from '../../constants/stopKeys';
import {
  initialStop,
  IStopModel,
  NextDepartureRecived,
} from '../../models/stop';
import { FetchData } from '../../services/appService';
import { allQueries } from '../../services/queries';
import { timeToString } from '../../utils/timeToString';
import { RootState } from '../rootReducer';

export enum ActionTypes {
  setStop = 'SET_STOP',
}

export interface SetStopAction extends Action {
  type: ActionTypes.setStop;
  payload: IStopModel;
}

export type StopActionTypes = SetStopAction;

type StopThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  StopActionTypes
>;

export const setStopInitial = () => ({
  type: ActionTypes.setStop,
  payload: initialStop,
});

export const getSetStopDetail =
  (id?: string | null): StopThunk =>
  async (dispatch) => {
    if (!id) return;
    const stop = await FetchData(allQueries.stopQuery(id));
    console.log(stop);
    if (!stop) return;
    if (stop?.[NEXT_DEPARTURES]?.length) {
      stop[NEXT_DEPARTURES] = stop[NEXT_DEPARTURES].map(
        (el: NextDepartureRecived) => ({
          ...el,
          [REAL_TIME_DEPARTURE]: timeToString(
            el[SERVICE_DAY],
            el[REAL_TIME_DEPARTURE]
          ),
        })
      );
    }
    return dispatch({
      type: ActionTypes.setStop,
      payload: { ...stop },
    });
  };
