import { all, fork } from 'redux-saga/effects';

import { booksSaga } from './Books';

function* rootSaga() {
  yield all([
    fork(booksSaga),
  ])
}

export {
  rootSaga,
}
