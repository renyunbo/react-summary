import * as types from '../constants/ActionTypes';

const initState = {
    isLoading: false,
    userInfo: {},
    errorMsg: '',
  };
  
  export default function reducer(state = initState, action) {
    switch (action.type) {
      case types.GET_USER_INFO_REQUEST:
        return {
          ...state,
          isLoading: true,
          userInfo: {},
          errorMsg: '',
        };
      case types.GET_USER_INFO_SUCCESS:
        return {
          ...state,
          isLoading: false,
          userInfo: action.userInfo,
          errorMsg: '',
        };
      case types.GET_USER_INFO_FAIL:
        return {
          ...state,
          isLoading: false,
          userInfo: {},
          errorMsg: '请求错误',
        };
      default:
        return state;
    }
  }