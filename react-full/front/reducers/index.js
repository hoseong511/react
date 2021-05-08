import { HYDRATE } from 'next-redux-wrapper'
import { combineReducers } from 'redux';

import user from './user';
import post from './post';

const initialState = {
  user: {
  },
  post: {
  }
};



// action creator -> async action creator
const changeNickname = (data) => {
  return {
    type: 'CHANGE_NICKNAME',
    data,   
  }
};
changeNickname('hoyq'); // 이런식으로 이용하자-> 바뀐 내용을  dispatch를 해주면 reducer에 따라서 다음상태가 생성된다.

// (이전상태, 액션) => 다음상태를 만드는 reducer!
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE: // ssr을 위한 HYDRATE!! 그래서 index에서 선언
        console.log(HYDRATE, action);
        return { ...state, ...action.payload};
      case 'CHANGE_NICKNAME':
        return {
          ...state,
          name: action.data
        }
      
      default:
        return state;
    } 
  },
  user,
  post,
});

export default rootReducer;