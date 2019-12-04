import {createStore,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import combineReducers from './reducers.js';

//利用redux-thunk   中间件就是action在到达reducer，先经过中间件处理，reducer能处理的action只有这样的{key:xxx},所以我们使用中间件来处理
//redux-thunk的作用：将函数形式的action转为标准的action给reducer
let store = createStore(combineReducers,applyMiddleware(thunkMiddleware));
export default store;