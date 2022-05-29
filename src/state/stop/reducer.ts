import { initialStop } from '../../models/stop';
import { ActionTypes, SetStopAction } from './actions';
import { StopState } from './state';

export const initialStopState: StopState = {
  currentStop: initialStop,
};

export const StopReducer = (
  state: StopState = initialStopState,
  action: SetStopAction
): StopState => {
  switch (action.type) {
    case ActionTypes.setStop:
      return {
        ...state,
        currentStop: { ...state.currentStop, ...action.payload },
      };
    default:
      return state;
  }
};
