import { booksSlice } from './slice';
import { booksSelectors } from './selectors';

const booksReducer = booksSlice.reducer;
const booksActions = booksSlice.actions;

export {
  booksReducer,
  booksActions,
  booksSelectors,
}
