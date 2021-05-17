import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // 브라우저 devtools랑 연결
import reducer from '../reducers'
import thunkMiddleware from 'redux-thunk';

const loggerMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  console.log(action);

  return next(action);
};
// loggerMiddleware같이 커스텀하게 미들웨어를 만들 수 있다.
const configureStore = () => {
  const middlewares = [thunkMiddleware, loggerMiddleware];
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