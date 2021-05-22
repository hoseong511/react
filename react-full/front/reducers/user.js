import axios from 'axios';

export const initialState = {
  isLoggingIn: false, // 로그인 시도 중
  isLoggedIn: false, 
  isLoggingOut: false, // 로그아웃 시도 중
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
    case 'LOG_IN_REQUEST':
      console.log('reducer login request');
      return {
        ...state,
        isLoggingIn: true,
        me: action.data,
      }
    case 'LOG_IN_SUCCESS':
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        me: action.data,
      }
    case 'LOG_IN_FAILURE':
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false,
        me: action.data,
      }
    case 'LOG_OUT_REQUEST':
      return {
        ...state,
        isLoggingOut: false,
      }
    case 'LOG_OUT_SUCCESS':
      return {
        ...state,
        isLoggingOut: false,
        isLoggedIn: false,
        me: null,
      }
    case 'LOG_OUT_FAILURE':
      return {
        ...state,
        isLoggingOut: false,
      }
    default:
      return state;
  }
}

export default reducer;
