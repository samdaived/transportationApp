import { initialStop } from '../../models/stop';
import { ActionTypes, StopActionTypes } from './actions';
import { StopState } from './state';

export const initialStopState: StopState = {
  currentStop: initialStop,
};

export const StopReducer = (
  state: StopState = initialStopState,
  action: StopActionTypes
): StopState => {
  switch (action.type) {
    case ActionTypes.setStop:
      return {
        ...state,
        currentStop: action.payload,
      };
    default:
      return state;
  }
};
