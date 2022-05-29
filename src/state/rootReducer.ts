import { combineReducers } from 'redux';
import { initialStopState, StopReducer } from './stop/reducer';
import { StopState } from './stop/state';

export interface RootState {
  stop: StopState;
}

export const initialRootState: RootState = {
  stop: initialStopState,
};

export const rootReducer = combineReducers<RootState>({
  stop: StopReducer,
});
