
export const initialState = {
  isSigningUp: false, // 회원가입 중
  isSignedUp: false,
  isSigningOut: false, // 회원 탈퇴중
  isLoggingIn: false, // 로그인 시도 중
  isLoggedIn: false, 
  isLoggingOut: false, // 로그아웃 시도 중
  isfollowing: false, // 팔로우 시도중
  isfollowed: false,
  isUnfollowing: false, // 언팔 시도중
  me: null,
  error: null,
  visible: false,
  signUpData: {},
  loginData: {}
};

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
export const SIGN_OUT_REQUEST = 'SIGN_OUT_REQUEST';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
export const SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE';
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
export const VISIBLE_ON = 'VISIBLE_ON';
export const VISIBLE_OFF = 'VISIBLE_OFF';
export const FOLLOW_REQUEST = 'FOLLOW_REQUEST'; 
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS'; 
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE'; 
export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST'; 
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS'; 
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE'; 

export const signInRequestAction = data => ({ type: SIGN_UP_REQUEST, data });
export const signOutRequestAction = data => ({ type: SIGN_OUT_REQUEST, data });
export const loginRequestAction = data => ({ type: LOG_IN_REQUEST, data });
export const logoutRequestAction = data => ({ type: LOG_OUT_REQUEST, data });
export const visibleOn = data => ({ type:VISIBLE_ON, data });
export const visibleOff = data => ({ type:VISIBLE_OFF, data });
export const followRequestAction = data => ({ type: FOLLOW_REQUEST, data});
export const unFollowRequestAction = data => ({ type: UNFOLLOW_REQUEST, data});

const dummyUser = data => ({
  ...data,
  nickname: '호호',
  id: 1,
  Posts: [],
  Followings: [],
  Followers: [],
})

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_REQUEST:
      return {
        ...state,
        isSigningUp: true,
        me: action.data,
      }
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        isSigningUp: false,
        isSignedUp: true,
        me: dummyUser(action.data),
      }
    case SIGN_UP_FAILURE:
      return {
        ...state,
        isSigningUp: false,
        error: action.error,
      }
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
        error: action.error,
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
        error: action.error,
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
