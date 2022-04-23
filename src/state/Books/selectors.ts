import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from 'state';

const list = (state: RootState) => state.Books.list;

const getList = createSelector(
  [list],
  (list) => list,
);

const booksSelectors = {
  getList,
}

export {
  booksSelectors,
}

