import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import counter from './reducers/couter';
import userInfo from './reducers/userInfo';

export default combineReducers({
  form: formReducer,//store需要知道组件入如何发送action，因此我们需要在您的store中注册formReducer，他可以服务于整个App中你定义的所有表单组件
  counter,
  userInfo,
});
