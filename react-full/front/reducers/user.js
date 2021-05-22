
export const initialState = {
  isLoggingIn: false, // 로그인 시도 중
  isLoggedIn: false, 
  isLoggingOut: false, // 로그아웃 시도 중
  me: null,
  visible: false,
  signUpData: {},
  loginData: {}
};

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
export const VISIBLE_ON = 'VISIBLE_ON';
export const VISIBLE_OFF = 'VISIBLE_OFF';

export const loginRequestAction = data => ({ type: LOG_IN_REQUEST, data });
export const logoutRequestAction = data => ({ type: LOG_OUT_REQUEST, data });
export const visibleOn = data => ({ type:VISIBLE_ON, data });
export const visibleOff = data => ({ type:VISIBLE_OFF, data });

const dummyUser = data => ({
  ...data,
  nickname: '호호',
  id: 1,
  Posts: [],
  Followings: [],
  Followers: [].
})

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
        me: action.data,
      }
    case LOG_IN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        me: dummyUser(action.data),
      }
    case LOG_IN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false,
        me: action.data,
      }
    case LOG_OUT_REQUEST:
      return {
        ...state,
        isLoggingOut: false,
      }
    case LOG_OUT_SUCCESS:
      return {
        ...state,
        isLoggingOut: false,
        isLoggedIn: false,
        me: null,
      }
    case LOG_OUT_FAILURE:
      return {
        ...state,
        isLoggingOut: false,
      }
    case VISIBLE_ON:
      return {
        ...state,
        visible: true,
      }
    case VISIBLE_OFF:
      return {
        ...state,
        visible: false,
      }
    default:
      return state;
  }
}

export default reducer;
