import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // 브라우저 devtools랑 연결
import reducer from '../reducers'

// 컴포넌트에 공급할 data 중앙 저장소
// 리덕스나 몹엑스로 비동기처리를 한다. 
// 불변성을 지켜야만 기록이 남는다. -> 당연히 참조한 상태로 값을 바꾸면 참조하고 있는 모든 것들의 값이 바뀌는 상황을 막는 형태를 불변성 유지라고 보면 될것 같다.
const configureStore = () => {
  const middlewares = [];
  const enhancer = process.env.NODE_ENV === 'production'
  ? compose(applyMiddleware(...middlewares)) // 배포용 일때 
  : composeWithDevTools(applyMiddleware(...middlewares)) // 개발용일때

  const store = createStore(reducer, enhancer);
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;