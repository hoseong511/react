import { HYDRATE } from 'next-redux-wrapper'

const initialState = {
  user: {
    isLogin: false,
    user: null,
    signUpData: {},
    loginData: {}
  },
  post: {
    mainPost: [],
  }
};

export const loginAction = (data) => {
  return {
    type: 'LOG_IN',
    data
  }
}
export const logoutAction = (data) => {
  return {
    type: 'LOG_OUT',
    data
  }
}

// action creator -> async action creator
const changeNickname = (data) => {
  return {
    type: 'CHANGE_NICKNAME',
    data,   
  }
};
changeNickname('hoyq'); // 이런식으로 이용하자-> 바뀐 내용을  dispatch를 해주면 reducer에 따라서 다음상태가 생성된다.





// (이전상태, 액션) => 다음상태를 만드는 reducer!
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log(HYDRATE, action);
      return { ...state, ...action.payload};
    case 'CHANGE_NICKNAME':
      return {
        ...state,
        name: action.data
      }
    case 'LOG_IN':
      return {
        ...state,
        user: {
          ...state.user,
          isLogin: true,
          user: action.data,
        }
      }
    case 'LOG_OUT':
      return {
        ...state,
        user: {
          ...state.user,
          isLogin: false,
          user: null,
        }
      }
    default:
      return state;
  }
};

export default rootReducer;