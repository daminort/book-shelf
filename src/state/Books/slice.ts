import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IBook } from 'interfaces/books.interface';
import { initialState } from './slice.init';

const booksSlice = createSlice({
  name: 'Books',
  initialState,
  reducers: {
    refreshList: (state, action: PayloadAction<IBook[]>) => {
      state.list = action.payload;
    },
  }
})

export {
  booksSlice,
}
