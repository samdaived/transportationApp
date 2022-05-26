import { Store, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger, thunk } from './middlewares';
import { initialRootState, rootReducer, RootState } from './rootReducer';

const storeCreator = (
  initialState: RootState = initialRootState
): Store<RootState> => {
  let middlewares = applyMiddleware(thunk, logger);

  if (process.env.NODE_ENV === 'development') {
    const composeEnhancer = composeWithDevTools({
      trace: true,
      traceLimit: 25,
    });
    middlewares = composeEnhancer(middlewares);
  }

  return createStore(
    rootReducer,
    initialState,
    middlewares
  ) as Store<RootState>;
};
export default storeCreator;
