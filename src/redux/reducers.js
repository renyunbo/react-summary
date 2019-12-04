import { combineReducers } from 'redux';
import counter from './reducers/couter';
import userInfo from './reducers/userInfo';

export default combineReducers({
    counter,
    userInfo,
  });
  