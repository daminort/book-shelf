import { all, takeLatest, put, call } from 'redux-saga/effects';

import { Action } from 'state/action.interface';

import { booksService, IGetListResponse } from 'services/books';
import { booksUtils } from 'utils/books.utils';

import { actions } from './actions';

function* listReload(action: Action) {

  const result: IGetListResponse = yield call(booksService.getList);
  if (!result) {
    return null;
  }

  const booksList = booksUtils.processResponse(result);
  yield put(actions.listRefresh(booksList));
}

function* booksSaga() {
  yield all([
    takeLatest(actions.LIST_RELOAD, listReload),
  ]);
}

export {
  booksSaga,
};
