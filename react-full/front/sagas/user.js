import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import { 
<<<<<<< HEAD
  CHANGE_NICKNAME_FAILURE, 
  CHANGE_NICKNAME_REQUEST, 
  CHANGE_NICKNAME_SUCCESS, 
  FOLLOW_FAILURE, 
  FOLLOW_REQUEST, 
  FOLLOW_SUCCESS, 
  LOAD_FOLLOWERS_FAILURE, 
  LOAD_FOLLOWERS_REQUEST, 
  LOAD_FOLLOWERS_SUCCESS, 
  LOAD_FOLLOWINGS_FAILURE, 
  LOAD_FOLLOWINGS_REQUEST, 
  LOAD_FOLLOWINGS_SUCCESS, 
  LOAD_MY_INFO_FAILURE, 
  LOAD_MY_INFO_REQUEST, 
  LOAD_MY_INFO_SUCCESS, 
  LOAD_USER_FAILURE, 
  LOAD_USER_REQUEST, 
  LOAD_USER_SUCCESS, 
  LOG_IN_FAILURE, 
  LOG_IN_REQUEST, 
  LOG_IN_SUCCESS, 
  LOG_OUT_FAILURE, 
  LOG_OUT_REQUEST, 
  LOG_OUT_SUCCESS, 
  REMOVE_FOLLOWER_FAILURE, 
  REMOVE_FOLLOWER_REQUEST, 
  REMOVE_FOLLOWER_SUCCESS, 
  SIGN_UP_FAILURE, 
  SIGN_UP_REQUEST, 
  SIGN_UP_SUCCESS, 
  UNFOLLOW_FAILURE, 
  UNFOLLOW_REQUEST, 
  UNFOLLOW_SUCCESS,
   } from '../reducers/user';
=======
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
>>>>>>> 92c32cacf7b0bf57550dc8cf16becf2cea4e2405
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

<<<<<<< HEAD
// saga는 테스트 시 log확인이 유용하다.
function loadMyinfoAPI() {
  return axios.get('/user');
}
function* loadMyinfo() {
  try {
    const result = yield call(loadMyinfoAPI) // call은 비동기처리, fork는 동기처리
=======
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

// function loadMyinfoAPI(data) {
//   return axios.get('/user', data);
// } 
// function loadUserAPI(data) {
//   return axios.get(`/user/${data}`);
// } 
// function logInAPI(data) {
//   return axios.post('/user/login', data);
// } 
// function logOutAPI() {
//   return axios.post('/user/logout');
// } 
// function signUpAPI(data) {
//   return axios.post('/user', data);
// } 
// function changeNickAPI(data) {
//   return axios.patch('/user/nickname', {nickname:data});
// } 
// function loadFollowerAPI(data) {
//   return axios.get(`/user/followers`, data);
// } 
// function loadFollowingsAPI(data) {
//   return axios.get(`/user/followings`, data);
// } 
// function followAPI(data) {
//   return axios.patch(`/user/${data}/follow`);
// } 
// function unFollowAPI(data) {
//   return axios.delete(`/user/${data}/follow`);
// } 
// function removeFollowerAPI(data) {
//   return axios.delete(`/user/follower/${data}`);
// }

function* loadMyinfo(action) {
  try {
    const result = yield call(loadMyinfoAPI, action.data) // call은 비동기처리, fork는 동기처리
>>>>>>> 92c32cacf7b0bf57550dc8cf16becf2cea4e2405
    yield put({ // dispatch
      type: LOAD_MY_INFO_SUCCESS,
      data: result.data,
    });
  } catch (error) {
<<<<<<< HEAD
    console.error(error);
    yield put({
      type: LOAD_MY_INFO_FAILURE,
      error: error,
    });
  }
}
function loadUserAPI(data) {
  return axios.get(`/user/${data}`);
}
function* loadUser(action) {
  try {
    const result = yield call(loadUserAPI, action.data) // call은 비동기처리, fork는 동기처리
    yield put({ // dispatch
      type: LOAD_USER_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: LOAD_USER_FAILURE,
      error: error,
=======
    console.log(error);
    yield put({
      type: LOAD_MY_INFO_FAILURE,
      error: error,
>>>>>>> 92c32cacf7b0bf57550dc8cf16becf2cea4e2405
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
<<<<<<< HEAD
function* watchLoadFollower() {
  yield takeLatest(LOAD_FOLLOWERS_REQUEST, loadFollowers);
}
function* watchLoadFollowings() {
  yield takeLatest(LOAD_FOLLOWINGS_REQUEST, loadFollowings);
}
function* watchMyinfo() {
  yield takeLatest(LOAD_MY_INFO_REQUEST, loadMyinfo);
}
function* watchLoadUser() {
  yield takeLatest(LOAD_USER_REQUEST, loadUser);
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
function* watchRemoveFollow() {
  yield takeLatest(REMOVE_FOLLOWER_REQUEST, removeFollower);
}
=======

>>>>>>> 92c32cacf7b0bf57550dc8cf16becf2cea4e2405
export default function* userSaga() {
  yield all([
    fork(watchLoadFollower),
    fork(watchLoadFollowings),
<<<<<<< HEAD
    fork(watchMyinfo),
=======
    fork(watchLoadMyinfo),
    fork(watchLoadUser),
    fork(watchLogIn),
    fork(watchLogOut),
>>>>>>> 92c32cacf7b0bf57550dc8cf16becf2cea4e2405
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
