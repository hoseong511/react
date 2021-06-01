import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import postSaga from './post';
import userSaga from './user';

axios.defaults.baseURL = 'http://49.50.161.74:3065/'; // 요청시 접두사
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([ // all은 동시 실행
    fork(userSaga),
    fork(postSaga),
  ]);
}
