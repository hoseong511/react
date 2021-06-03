import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import { ADD_COMMENT_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS,
         ADD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, 
         LIKE_POST_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, 
         LOAD_HASHTAG_POSTS_FAILURE, 
         LOAD_HASHTAG_POSTS_REQUEST, 
         LOAD_HASHTAG_POSTS_SUCCESS, 
         LOAD_POSTS_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, 
         LOAD_POST_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, 
         LOAD_USER_POSTS_FAILURE, 
         LOAD_USER_POSTS_REQUEST, 
         LOAD_USER_POSTS_SUCCESS, 
         REMOVE_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, 
         RETWEET_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS, 
         UNLIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, 
         UPLOAD_IMAGES_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS } from '../reducers/post';
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from '../reducers/user';

const retweetAPI = (data) => axios.post(`/post/${data}/retweet`, );
const uploadImagesAPI = (data) => axios.post('/post/images', data);
const loadUserPostsAPI = (data, lastId) => axios.get(`/user/${data}/posts?lastId=${lastId}`); 
const loadHashtagPostsAPI = (data, lastId) => axios.get(`/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}}`); 
const loadPostAPI = (data) => axios.get(`/post/${data}`); 
const loadPostsAPI = (lastId) => axios.get(`/posts?lastId=${lastId || 0}`); // get에서 2번째 인수는 withCredential
const addPostAPI = (data) => axios.post('/post', data );
const addCommentAPI = (data) => axios.post(`/post/${data.postId}/comment`, data); // POST /post/1/comment
const removePostAPI = (data) => axios.delete(`/post/${data}`);
const likePostAPI = (data) => axios.patch(`/post/${data}/like`);
const unLikePostAPI = (data) => axios.delete(`/post/${data}/like`);

function* retweet(action) {
  try {
    const result = yield call(retweetAPI, action.data)
    yield put({
      type: RETWEET_SUCCESS,
      data: result.data
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: RETWEET_FAILURE,
      error: error.response.data,
    });
  }
}

function* uploadImages(action) {
  try {
    const result = yield call(uploadImagesAPI, action.data)
    console.log(result);
    yield put({
      type: UPLOAD_IMAGES_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield put({
      type: UPLOAD_IMAGES_FAILURE,
      error: error.response.data,
    });
  }
}

function* loadPost(action) {
  try {
    const result = yield call(loadPostAPI, action.data)
    yield put({
      type: LOAD_POST_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield put({
      type: LOAD_POST_FAILURE,
      error: error.response.data,
    });
  }
}
function* loadUserPosts(action) {
  try {
    const result = yield call(loadUserPostsAPI, action.data, action.lastId)
    yield put({
      type: LOAD_USER_POSTS_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield put({
      type: LOAD_USER_POSTS_FAILURE,
      error: error.response.data,
    });
  }
}
function* loadHashtagPosts(action) {
  try {
    const result = yield call(loadHashtagPostsAPI, action.data, action.lastId)
    yield put({
      type: LOAD_HASHTAG_POSTS_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield put({
      type: LOAD_HASHTAG_POSTS_FAILURE,
      error: error.response.data,
    });
  }
}

function* loadPosts(action) {
  try {
    const result = yield call(loadPostsAPI, action.lastId)
    yield put({
      type: LOAD_POSTS_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield put({
      type: LOAD_POSTS_FAILURE,
      error: error.response.data,
    });
  }
}

function* addPost(action) {
  try {
    const result = yield call(addPostAPI, action.data)
    console.log(result);
    yield put({
      type: ADD_POST_SUCCESS,
      data: result.data
    });
    yield put({
      type: ADD_POST_TO_ME,
      data: result.data.id,
    });
  } catch (error) {
    yield put({
      type: ADD_POST_FAILURE,
      error: error.response.data,
    });
  }
}

function* removePost(action) {
  try {
    console.log(action.data);
    const result = yield call(removePostAPI, action.data)
    console.log(result);
    yield put({ type: REMOVE_POST_SUCCESS, data: result.data });
    yield put({ type: REMOVE_POST_OF_ME, data: result.data, });
  } catch (error) {
    console.error(error)
    yield put({ type: REMOVE_POST_FAILURE, error: error.response.data, });
  }
}

function* likePost(action) {
  try {
    console.log(action.data);
    const result = yield call(likePostAPI, action.data)
    console.log(result);
    yield put({
      type: LIKE_POST_SUCCESS,
      data: result.data,
    });    
  } catch (error) {
    console.error(error);
    yield put({
      type: LIKE_POST_FAILURE,
      error: error.response.data,
    });
  }
}

function* unLikePost(action) {
  try {
    const result = yield call(unLikePostAPI, action.data)
    yield put({
      type: UNLIKE_POST_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: UNLIKE_POST_FAILURE,
      error: error.response.data,
    });
  }
}

function* addComment(action) {
  try {
    const result = yield call(addCommentAPI, action.data)
    console.log(result.data);
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: ADD_COMMENT_FAILURE,
      error: error.response.data,
    });
  }
}
function* watchRetweet() { yield takeLatest(RETWEET_REQUEST, retweet); }
function* watchUploadImages() { yield takeLatest(UPLOAD_IMAGES_REQUEST, uploadImages); }
function* watchLoadUserPosts() { yield takeLatest(LOAD_USER_POSTS_REQUEST, loadUserPosts); }
function* watchLoadHashtagPosts() { yield takeLatest(LOAD_HASHTAG_POSTS_REQUEST, loadHashtagPosts); }
function* watchLoadPost() { yield takeLatest(LOAD_POST_REQUEST, loadPost); }
function* watchLoadPosts() { yield takeLatest(LOAD_POSTS_REQUEST, loadPosts); }// throttle을 사용한다 하더라도 기능이 작동하기 전 요청 건은 제거하지 못한다.
function* watchAddPost() { yield takeLatest(ADD_POST_REQUEST, addPost); }
function* watchAddComment() { yield takeLatest(ADD_COMMENT_REQUEST, addComment); }
function* watchLikePost() { yield takeLatest(LIKE_POST_REQUEST, likePost); }
function* watchUnLikePost() { yield takeLatest(UNLIKE_POST_REQUEST, unLikePost); }
function* watchRemovePost() { yield takeLatest(REMOVE_POST_REQUEST, removePost); }

export default function* postSaga() {
  yield all([
    fork(watchRetweet),
    fork(watchUploadImages),
    fork(watchLoadUserPosts),
    fork(watchLoadHashtagPosts),
    fork(watchLoadPost),
    fork(watchLoadPosts),
    fork(watchAddPost),
    fork(watchRemovePost),
    fork(watchLikePost),
    fork(watchUnLikePost),
    fork(watchAddComment),
  ]);
}
