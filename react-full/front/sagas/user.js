import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import { 
  CHANGE_NICKNAME_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, 
  FOLLOW_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, 
  LOAD_FOLLOWERS_FAILURE, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, 
  LOAD_FOLLOWINGS_FAILURE, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, 
  LOAD_MY_INFO_FAILURE, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, 
  LOAD_USER_INFO_FAILURE, LOAD_USER_INFO_REQUEST, LOAD_USER_INFO_SUCCESS, 
  LOG_IN_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, 
  LOG_OUT_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, 
  REMOVE_FOLLOWER_FAILURE, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS, 
  SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, 
  UNFOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS } from '../reducers/user';
import { RESET_MAIN_POST } from '../reducers/post';

function* watchLoadFollower() { yield takeLatest(LOAD_FOLLOWERS_REQUEST, loadFollowers); }
function* watchLoadFollowings() { yield takeLatest(LOAD_FOLLOWINGS_REQUEST, loadFollowings); }
function* watchLoadMyinfo() { yield takeLatest(LOAD_MY_INFO_REQUEST, loadMyinfo); }
function* watchLoadUser() { yield takeLatest(LOAD_USER_INFO_REQUEST, loadUser); }
function* watchLogIn() { yield takeLatest(LOG_IN_REQUEST, logIn); }
function* watchLogOut() { yield takeLatest(LOG_OUT_REQUEST, logOut); }
function* watchSignUp() { yield takeLatest(SIGN_UP_REQUEST, signUp); }
function* watchNick() { yield takeLatest(CHANGE_NICKNAME_REQUEST, changeNick); }
function* watchFollow() { yield takeLatest(FOLLOW_REQUEST, follow); }
function* watchUnFollow() { yield takeLatest(UNFOLLOW_REQUEST, unFollow); }
function* watchRemoveFollow() { yield takeLatest(REMOVE_FOLLOWER_REQUEST, removeFollower); }

const loadMyinfoAPI = (data) => axios.get('/user', data);
const loadUserAPI = (data) => axios.get(`/user/${data}`);
const logInAPI = (data) => axios.post('/user/login', data);
const logOutAPI = () => axios.post('/user/logout');
const signUpAPI = (data) => axios.post('/user', data);
const changeNickAPI = (data) => axios.patch('/user/nickname', {nickname:data});
const loadFollowerAPI = (data) => axios.get(`/user/followers`, data);
const loadFollowingsAPI = (data) => axios.get(`/user/followings`, data);
const followAPI = (data) => axios.patch(`/user/${data}/follow`);
const unFollowAPI = (data) => axios.delete(`/user/${data}/follow`);
const removeFollowerAPI = (data) => axios.delete(`/user/follower/${data}`);

function* loadMyinfo(action) {
  try {
    const result = yield call(loadMyinfoAPI, action.data) // call은 비동기처리, fork는 동기처리
    yield put({ // dispatch
      type: LOAD_MY_INFO_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: LOAD_MY_INFO_FAILURE,
      error: error,
    });
  }
}

function* loadUser(action) {
  try {
    const result = yield call(loadUserAPI, action.data) // call은 비동기처리, fork는 동기처리
    yield put({ // dispatch
      type: LOAD_USER_INFO_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: LOAD_USER_INFO_FAILURE,
      error: error.response.data,
    });
  }
}

function* logIn(action) {
  try {
    const result = yield call(logInAPI, action.data) // call은 비동기처리, fork는 동기처리
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

function* signUp(action) {
  try {
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

function* changeNick(action) {
  try {
    console.log(action.data);
    const result = yield call(changeNickAPI, action.data); 
    yield put({
      type: CHANGE_NICKNAME_SUCCESS,
      data: result.data,
    });
    yield put({
      type: RESET_MAIN_POST,
    });
  } catch (error) {
    console.error(error)
    yield put({
      type: CHANGE_NICKNAME_FAILURE,
      error: error.response.data,
    });
  }
}

function* loadFollowers(action) {
  try {
    const result = yield call(loadFollowerAPI, action.data) // call은 비동기처리, fork는 동기처리
    yield put({
      type: LOAD_FOLLOWERS_SUCCESS,
      data: result.data
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: LOAD_FOLLOWERS_FAILURE,
      error: error.response.data,
    });
  }
}

function* loadFollowings(action) {
  try {
    const result = yield call(loadFollowingsAPI, action.data) // call은 비동기처리, fork는 동기처리
    yield put({
      type: LOAD_FOLLOWINGS_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield put({
      type: LOAD_FOLLOWINGS_FAILURE,
      error: error.response.data,
    });
  }
}

function* follow(action) {
  try {
    console.log(action.data);
    const result = yield call(followAPI, action.data) 
    yield put({
      type: FOLLOW_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: FOLLOW_FAILURE,
      error: error,
    });
  }
}

function* unFollow(action) {
  try {
    console.log(action.data);
    const result = yield call(unFollowAPI, action.data) 
    yield put({
      type: UNFOLLOW_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: UNFOLLOW_FAILURE,
      error: error,
    });
  }
}

function* removeFollower(action) {
  try {
    console.log(action.data);
    const result = yield call(removeFollowerAPI, action.data) 
    yield put({
      type: REMOVE_FOLLOWER_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: REMOVE_FOLLOWER_FAILURE,
      error: error,
    });
  }
}
export default function* userSaga() {
  yield all([
    fork(watchLoadFollower),
    fork(watchLoadFollowings),
    fork(watchLoadMyinfo),
    fork(watchLoadUser),
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchLoadUser),
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchSignUp),
    fork(watchNick),
    fork(watchUnFollow),
    fork(watchRemoveFollow),
    fork(watchFollow),
  ]);
}
