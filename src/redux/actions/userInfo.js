import * as types from '../constants/ActionTypes';

function getUserInfoRequest() {
    return {
        type: types.GET_USER_INFO_REQUEST
    }
}

function getUserInfoSuccess(userInfo) {
    return {
        type: types.GET_USER_INFO_SUCCESS,
        userInfo: userInfo
    }
}

function getUserInfoFail() {
    return {
        type: GET_USER_INFO_FAIL
    }
}

export function getUserInfo() {
    return function (dispatch) {
      dispatch(getUserInfoRequest());
  
      return fetch('/api/user.json')
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          dispatch(getUserInfoSuccess(json));
        })
        .catch(() => {
          dispatch(getUserInfoFail());
        });
    };
  }