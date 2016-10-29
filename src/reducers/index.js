import {combineReducers} from 'redux';
import entities from './entities';
import feed from './feed';

export default combineReducers({
  entities,
  feed
});
