import { AnyAction, CombinedState, combineReducers } from 'redux';

export interface RootState {}

export const initialRootState = {};

export const appReducer = combineReducers<RootState>({});

export const rootReducer = (
  state: CombinedState<RootState> | undefined,
  action: AnyAction
) => {
  // when a logout action is dispatched it will reset redux state
  if (action.type === 'LOGOUT_USER') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};
