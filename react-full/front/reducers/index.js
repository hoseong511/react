import { HYDRATE } from 'next-redux-wrapper'
import { combineReducers } from 'redux';

import user from './user';
import post from './post';

// (이전상태, 액션) => 다음상태를 만드는 reducer!
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE: // ssr을 위한 HYDRATE!! 그래서 index에서 선언
        console.log(HYDRATE, action);
        return { ...state, ...action.payload};
      default:
        return state;
    } 
  },
  user,
  post,
});

export default rootReducer;