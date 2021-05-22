import { all, fork } from 'redux-saga/effects';
import postSaga from './post';
import userSaga from './user';

export default function* rootSaga() {
  yield all([ // all은 동시 실행
    fork(userSaga),
    fork(postSaga),
  ]);
}
