import axios from 'axios';
import { all, call, fork, put, take } from 'redux-saga/effects';
// saga는 테스트 시 log확인이 유용하다. 
function logInAPI(data) {
  return axios.post('/api/login', data);
}

function* logIn(action) {
  try {
    const result = yield call(logInAPI, action.data,) // call은 비동기처리, fork는 동기처리
    yield put({ // dispatch
      type: "LOG_IN_SUCCESS",
      data: result.data
    })
  } catch (error) {
    yield put({
      type: 'LOG_IN_FAILURE',
      data: error.response.data,
    })
  }
}
function logOutAPI() {
  return axios.post('/api/logout');
}

function* logOut() {
  try {
    const result = yield call(logOutAPI) // call은 비동기처리, fork는 동기처리
    yield put({
      type: "LOG_OUT_SUCCESS",
      data: result.data
    })
  } catch (error) {
    yield put({
      type: 'LOG_OUT_FAILURE',
      data: error.response.data,
    })
  }
}

function addPostAPI(data) {
  return axios.post('/api/post', data);
}

function* addPost(action) {
  try {
    const result = yield call(addPostAPI, action.data) 
    yield put({
      type: "ADD_POST_SUCCESS",
      data: result.data
    })
  } catch (error) {
    yield put({
      type: 'ADD_POST_FAILURE',
      data: error.response.data,
    })
  }
}
// 이벤트리스너 처럼 작동되는 원리
function* watchLogIn() {
  yield take("LOG_IN_REQUEST", logIn);
}
function* watchLogOut() {
  yield take("LOG_OUT_REQUEST", logOut);
}
function* watchAddPost() {
  yield take("ADD_POST_REQUEST", addPost);
}

export default function* rootSaga() {
  yield all([ // all은 동시 실행
    fork(watchLogIn), // fork는 함수를 실행하는 의미
    fork(watchLogOut),
    fork(watchAddPost)
  ]);
}