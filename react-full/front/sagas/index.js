import axios from 'axios';
import { all, call, delay, fork, put, takeLatest } from 'redux-saga/effects';
// saga는 테스트 시 log확인이 유용하다. 
function logInAPI(data) {
  return axios.post('/api/login', data);
}

function* logIn(action) {
  try {
    yield delay(1000);
    // const result = yield call(logInAPI, action.data,) // call은 비동기처리, fork는 동기처리
    yield put({ // dispatch
      type: "LOG_IN_SUCCESS",
      // data: result.data
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
    // const result = yield call(logOutAPI) // call은 비동기처리, fork는 동기처리
    yield delay(1000);
    yield put({
      type: "LOG_OUT_SUCCESS",
      // data: result.data
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
    // const result = yield call(addPostAPI, action.data) 
    yield delay(1000);
    yield put({
      type: "ADD_POST_SUCCESS",
      // data: result.data
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
  yield takeLatest("LOG_IN_REQUEST", logIn); // take는 한번 실행되면 제거됨, takeEvery는 while + 비동기 
} // takeEvery보다는 takeLatest를 적용해야 만약에 여러번 호출되었을 시 마지막 요청만 한 번 처리된다.
// 동시 로딩 중인 상황에서 마지막으로 들어온 것만 남기고 로딩 중인 job을 제거한다
/**
    그런데 서버에 보내는 요청을 제어하지는 못한다. 
 * 연속 두번으로 보내는 경우 두번 다 백엔드 서버에서 처리 후 2번 응답을 하는데 
 * 프론트 서버가 들어온 응답중 마지막 응답만 처리를 하겠다는 의미이다.
 * 그래서 요청을 제어하는 throttle도 있다. 
*/
function* watchLogOut() {
  yield takeLatest("LOG_OUT_REQUEST", logOut);
}
function* watchAddPost() {
  yield takeLatest("ADD_POST_REQUEST", addPost);
}

export default function* rootSaga() {
  yield all([ // all은 동시 실행
    fork(watchLogIn), // fork는 함수를 실행하는 의미
    fork(watchLogOut),
    fork(watchAddPost)
  ]);
}