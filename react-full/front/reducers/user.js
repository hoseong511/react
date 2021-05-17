import axios from 'axios';

export const initialState = {
  isLogin: false,
  me: null,
  signUpData: {},
  loginData: {}
};
// thunk -> dispatch를 한번에 할 수 있게 해준다. saga는 throttle 기능도 제공한다. 
export const loginAction = (data) => {
  return (dispatch, getState) => {
    const state = getState();
    dispatch(loginRequestAction());
    axios.post('/api/login')
      .then((res) => {
        dispatch(loginSuccessAction(res.data));
      })
      .catch((err) => {
        dispatch(loginFailureAction(err));
      })
  }
}

export const loginRequestAction = (data) => {
  return {
    type: 'LOG_IN_REQUEST',
    data
  };
};
export const loginSuccessAction = (data) => {
  return {
    type: 'LOG_IN_SUCCESS',
    data
  };
};
export const loginFailureAction = (data) => {
  return {
    type: 'LOG_IN_Faulure',
    data
  };
};
export const logoutRequestAction = (data) => {
  return {
    type: 'LOG_OUT_REQUEST',
    data
  };
};
export const logoutSuccessAction = (data) => {
  return {
    type: 'LOG_OUT_SUCCESS',
    data
  };
};
export const logoutFailureAction = (data) => {
  return {
    type: 'LOG_OUT_FAILURE',
    data
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state,
        isLogin: true,
        me: action.data,
      }
    case 'LOG_OUT':
      return {
        ...state,
        isLogin: false,
        me: null,
      }
    default:
      return state;
  }
}

export default reducer;
