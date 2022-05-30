import { Action, AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { store } from '../..';
import {
  NEXT_DEPARTURES,
  REAL_TIME_DEPARTURE,
  SERVICE_DAY,
} from '../../constants/stopKeys';
import { initialStop, IStopModel } from '../../models/stop';
import { FetchStopDetails } from '../../services/appService';
import { allQueries } from '../../services/queries';
import { timeToString } from '../../utils/timeToString';
import { rootReducer, RootState } from '../rootReducer';

export enum ActionTypes {
  setStop = 'SET_STOP',
}

export interface SetStopAction extends Action {
  type: ActionTypes.setStop;
  payload: IStopModel;
}

export type AppDispatch = typeof store.dispatch;
export type ReduxState = ReturnType<typeof rootReducer>;
export type StopDispatch = ThunkDispatch<ReduxState, any, AnyAction>;
export type StopThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  AnyAction
>;

export const setStopInitial = () => ({
  type: ActionTypes.setStop,
  payload: initialStop,
});

export const getSetStopDetail =
  (id?: string | null): StopThunk =>
  async (dispatch, getState) => {
    if (!id) return;
    const stop = await FetchStopDetails(
      allQueries.stopQuery(id, getState().stop.currentStop)
    );
    if (!stop) return;

    // change time to string local time
    if (stop?.[NEXT_DEPARTURES]?.length) {
      stop[NEXT_DEPARTURES] = stop[NEXT_DEPARTURES].map((el) => ({
        ...el,
        [REAL_TIME_DEPARTURE]: timeToString(
          el[SERVICE_DAY],
          el[REAL_TIME_DEPARTURE]
        ),
      }));
    }
    return dispatch({
      type: ActionTypes.setStop,
      payload: { ...stop },
    });
  };
