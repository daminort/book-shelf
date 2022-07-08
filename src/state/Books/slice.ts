import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IBook } from 'interfaces/books.interface';

import { sliceName } from './constants';
import { initialState } from './slice.init';

const slice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    listRefresh: (state, action: PayloadAction<IBook[]>) => {
      state.list = action.payload;
    },
  }
})

export {
  slice,
}
