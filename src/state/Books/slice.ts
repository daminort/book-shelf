import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Book } from 'interfaces/books.interface';
import { initialState } from './slice.init';

const booksSlice = createSlice({
  name: 'Books',
  initialState,
  reducers: {
    refreshList: (state, action: PayloadAction<Book[]>) => {
      state.list = action.payload;
    },
  }
})

export {
  booksSlice,
}
