import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import postSaga from './post';
import userSaga from './user';

axios.defaults.baseURL = 'http://localhost:3065'; // 요청시 접두사

export default function* rootSaga() {
  yield all([ // all은 동시 실행
    fork(userSaga),
    fork(postSaga),
  ]);
}
