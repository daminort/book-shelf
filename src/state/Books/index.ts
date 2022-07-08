import { slice } from './slice';
import { booksSaga } from './saga';
import { actions as booksActions } from './actions';
import { selectors as booksSelectors } from './selectors';

const booksReducer = slice.reducer;

export {
  booksActions,
  booksReducer,
  booksSaga,
  booksSelectors,
}
