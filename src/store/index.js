import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import reducers from '../reducers';

const logger = createLogger({
  collapsed: false,
  predicate: () => __DEV__
});

const createStoreWithMiddleware = applyMiddleware(
  logger
)(createStore);

const store = createStoreWithMiddleware(reducers);

export default store;
