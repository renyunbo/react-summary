import * as types from '../constants/ActionTypes';

/*
* 初始化state
*/
const initState = {
  count: 0,
};

/*
* reducer
*/
export default function reducer(state = initState, action) {
  switch (action.type) {
    case types.INCREMENT:
      return {
        count: state.count + 1,
      };
    case types.DECREMENT:
      return {
        count: state.count - 1,
      };
    case types.RESET:
      return { count: 0 };
    default:
      return state;
  }
}