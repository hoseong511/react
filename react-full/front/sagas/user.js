import { all, delay, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import { 
  CHANGE_NICKNAME_FAILURE, 
  CHANGE_NICKNAME_REQUEST, 
  CHANGE_NICKNAME_SUCCESS, 
  FOLLOW_FAILURE, 
  FOLLOW_REQUEST, 
  FOLLOW_SUCCESS, 
  LOG_IN_FAILURE, 
  LOG_IN_REQUEST, 
  LOG_IN_SUCCESS, 
  LOG_OUT_FAILURE, 
  LOG_OUT_REQUEST, 
  LOG_OUT_SUCCESS, 
  SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, UNFOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS } from '../reducers/user';

// saga는 테스트 시 log확인이 유용하다.
function logInAPI(data) {
  return axios.post('/user/login', data);
}
function* logIn(action) {
  try {
    const result = yield call(logInAPI, action.data,) // call은 비동기처리, fork는 동기처리
    yield put({ // dispatch
      type: LOG_IN_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: LOG_IN_FAILURE,
      error: error.response.data,
    });
  }
}
function logOutAPI() {
  return axios.post('/user/logout');
}

function* logOut() {
  try {
    yield call(logOutAPI) // call은 비동기처리, fork는 동기처리
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: error.response.data,
    });
  }
}
function signUpAPI(data) {
  return axios.post('/user', data);
}

function* signUp(action) {
  try {
    console.log(action.data);
    const result = yield call(signUpAPI, action.data) // call은 비동기처리, fork는 동기처리
    console.log(result);
    yield put({
      type: SIGN_UP_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield put({
      type: SIGN_UP_FAILURE,
      error: error.response.data,
    });
  }
}
function changeNickAPI() {
  return axios.post('/api/signUp');
}

function* changeNick() {
  try {
    // const result = yield call(logOutAPI) // call은 비동기처리, fork는 동기처리
    yield delay(1000);
    yield put({
      type: CHANGE_NICKNAME_SUCCESS,
      // data: result.data
    });
  } catch (error) {
    yield put({
      type: CHANGE_NICKNAME_FAILURE,
      error: error.response.data,
    });
  }
}
function followAPI() {
  return axios.post('/api/signUp');
}
function* follow(action) {
  try {
    // const result = yield call(logOutAPI) // call은 비동기처리, fork는 동기처리
    yield delay(1000);
    yield put({
      type: FOLLOW_SUCCESS,
      data: action.data
    });
  } catch (error) {
    yield put({
      type: FOLLOW_FAILURE,
      error: error.response.data,
    });
  }
}
function unFollowAPI() {
  return axios.post('/api/signUp');
}

function* unFollow(action) {
  try {
    // const result = yield call(logOutAPI) // call은 비동기처리, fork는 동기처리
    yield delay(1000);
    yield put({
      type: UNFOLLOW_SUCCESS,
      data: action.data,
    });
  } catch (error) {
    yield put({
      type: UNFOLLOW_FAILURE,
      error: error,
    });
  }
}
function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}
function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}
function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}
function* watchNick() {
  yield takeLatest(CHANGE_NICKNAME_REQUEST, changeNick);
}
function* watchFollow() {
  yield takeLatest(FOLLOW_REQUEST, follow);
}
function* watchUnFollow() {
  yield takeLatest(UNFOLLOW_REQUEST, unFollow);
}
export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchSignUp),
    fork(watchNick),
    fork(watchUnFollow),
    fork(watchFollow),
  ]);
}
// takeEvery보다는 takeLatest를 적용해야 만약에 여러번 호출되었을 시 마지막 요청만 한 번 처리된다.
// 동시 로딩 중인 상황에서 마지막으로 들어온 것만 남기고 로딩 중인 job을 제거한다
/**
    그런데 서버에 보내는 요청을 제어하지는 못한다.
 * 연속 두번으로 보내는 경우 두번 다 백엔드 서버에서 처리 후 2번 응답을 하는데
 * 프론트 서버가 들어온 응답중 마지막 응답만 처리를 하겠다는 의미이다.
 * 그래서 요청을 제어하는 throttle도 있다.
 * throttle("LOG_IN", logIn, 2000)
*/
