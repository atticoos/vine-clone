import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';
import reducers from '../reducers';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const logger = createLogger({
  collapsed: false,
  predicate: () => false && __DEV__
});

const createStoreWithMiddleware = applyMiddleware(
  logger,
  sagaMiddleware
)(createStore);

const store = createStoreWithMiddleware(reducers);

sagaMiddleware.run(sagas);

export default store;
