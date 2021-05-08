import { createWrapper } from 'next-redux-wrapper';
import { createStore } from 'redux';
import reducer from '../reducers'

// 컴포넌트에 공급할 data 중앙 저장소
// 리덕스나 몹엑스로 비동기처리를 한다. 
const configureStore = () => {
  const store = createStore(reducer);
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;