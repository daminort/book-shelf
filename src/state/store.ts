import { configureStore } from '@reduxjs/toolkit';

import { booksReducer } from 'state/Books';

const store = configureStore({
  reducer: {
    Books: booksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {
  store,
}
