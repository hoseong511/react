import produce from 'immer';

export const initialState = {
  isSigningUp: false, // 회원가입 중
  isSignedUp: false,
  isSigningOut: false, // 회원 탈퇴중
  isLoggingIn: false, // 로그인 시도 중
  isLoggedIn: false,
  isLoggingOut: false, // 로그아웃 시도 중
  isFollowing: false, // 팔로우 시도중
  isFollowed: false,
  isUnfollowing: false, // 언팔 시도중
  isNickChanging: false, // 닉네임 변경 시도 중
  isNickChanged: false,
  me: null,
  error: null,
  visible: false,
  signUpData: {},
  loginData: {},
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
export const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_SUCCESS';
export const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
export const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';
export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
export const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

export const signUpRequestAction = (data) => ({ type: SIGN_UP_REQUEST, data });
export const signOutRequestAction = (data) => ({ type: SIGN_OUT_REQUEST, data });
export const loginRequestAction = (data) => ({ type: LOG_IN_REQUEST, data });
export const logoutRequestAction = (data) => ({ type: LOG_OUT_REQUEST, data });
export const visibleOn = (data) => ({ type: VISIBLE_ON, data });
export const visibleOff = (data) => ({ type: VISIBLE_OFF, data });
export const followRequestAction = (data) => ({ type: FOLLOW_REQUEST, data });
export const unFollowRequestAction = (data) => ({ type: UNFOLLOW_REQUEST, data });
export const changeNicknameRequestAction = (data) => ({ type: CHANGE_NICKNAME_REQUEST, data });

const dummyUser = (data) => ({
  ...data,
  nickname: 'HoHo',
  id: 1,
  Posts: [{ id: 1 }],
  Followings: [{ nickname: '부기초1'}, { nickname: '부기초2'}, { nickname: '부기초3'}],
  Followers: [{ nickname: '부기초1'}, { nickname: '부기초2'}, { nickname: '부기초3'}],
});

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case SIGN_UP_REQUEST:
        draft.isSigningUp = true;
        draft.isSigningUp = false;
        draft.error = null;
        break;
      case SIGN_UP_SUCCESS:
        draft.isSigningUp = false;
        draft.isSignedUp = true;
        draft.me = dummyUser(action.data);
        break;
      case SIGN_UP_FAILURE:
        draft.isSigningUp = false;
        draft.isSignedUp = false;
        draft.error = action.error;
        break;
      case LOG_IN_REQUEST:
        draft.isLoggingIn = true;
        draft.isLoggedIn = false;
        break;
      case LOG_IN_SUCCESS:
        draft.isLoggingIn = false;
        draft.isLoggedIn = true;
        draft.me = dummyUser(action.data);
        break;
      case LOG_IN_FAILURE:
        draft.isLoggingIn = false;
        draft.isLoggedIn = false;
        draft.error = action.error;
        break;
      case LOG_OUT_REQUEST:
        draft.isLoggingOut = true;
        draft.isLoggedOut = false;
        draft.error = null;
        break;
      case LOG_OUT_SUCCESS:
        draft.isLoggingOut = false;
        draft.isLoggedOut = true;
        draft.me = null;
        break;
      case LOG_OUT_FAILURE:
        draft.isLoggingOut = false;
        draft.isLoggedOut = false;
        draft.error = action.error;
        break;
      case CHANGE_NICKNAME_REQUEST:
        draft.isNickChanging = true;
        draft.isNickChanged = false;
        draft.error = null;
        break;
      case CHANGE_NICKNAME_SUCCESS:
        draft.isNickChanging = false;
        draft.isNickChanged = true;
        draft.me = action.data;
        break;
      case CHANGE_NICKNAME_FAILURE:
        draft.isNickChanging = false;
        draft.isNickChanged = false;
        draft.error = action.error;
        break;
      case FOLLOW_REQUEST:
        draft.isFollowing = true;
        draft.isFollowed = false;
        draft.error = null;
        break;
      case FOLLOW_SUCCESS:
        draft.isFollowing = false;
        draft.isFollowed = true;
        draft.me.Followings.push({ id: action.data })
        break;
      case FOLLOW_FAILURE:
        draft.isFollowing = false;
        draft.isFollowed = false;
        draft.error = action.error;
        break;
      case UNFOLLOW_REQUEST:
        draft.isUnFollowing = true;
        draft.isFollowed = true;
        draft.error = null;
        break;
      case UNFOLLOW_SUCCESS:
        draft.isUnFollowing = false;
        draft.isFollowed = false;
        draft.me.Followings = draft.me.Followings.filter((v) => v.id !== action.data);
        break;
      case UNFOLLOW_FAILURE:
        draft.isUnFollowing = false;
        draft.isFollowed = true;
        draft.error = action.error;
        break;
      case ADD_POST_TO_ME:
        draft.me.Posts.unshift({ id: action.data });
        break;
      case REMOVE_POST_OF_ME:
        draft.me.Posts = draft.me.Posts.filter((v) => v.id !== action.data);
        break;
      case VISIBLE_ON:
        draft.visible = true;
        break;
      case VISIBLE_OFF:
        draft.visible = false;
        break;
      default:
        break;
    }
  });
};

export default reducer;
