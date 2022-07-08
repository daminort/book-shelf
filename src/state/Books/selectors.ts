import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from 'state';

const list = (state: RootState) => state.Books.list;

const getList = createSelector(
  [list],
  (list) => list,
);

const getShelfSize = createSelector(
  [list],
  (list) => {
    const size = list.reduce((res, book) => {
      return res + book.pages;
    }, 0);

    return size;
  },
);

const selectors = {
  getList,
  getShelfSize,
}

export {
  selectors,
}
