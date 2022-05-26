import { Middleware } from 'redux';

const logger: Middleware = () => (next) => (action) => {
  return next(action);
};

export default logger;
