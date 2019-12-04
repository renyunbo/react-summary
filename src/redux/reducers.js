import counter from './reducers/couter';
import userInfo from './reducers/userInfo';

export default function combineReducers(state = {}, action) {
    return {
        counter: counter(state.counter, action),
        userInfo:userInfo(state.userInfo,action)
    }
}