import React, { useEffect, useCallback } from 'react';

import { useDispatch } from 'state';
import {booksActions } from 'state/Books';

import { Button, Shelf } from 'components';
import { Books } from 'containers/Books';
import { books, minWidth } from 'mocks/books';

import s from './app.module.css';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(booksActions.refreshList(books));
  }, [dispatch]);

  const onRefresh = useCallback(() => {
    dispatch(booksActions.refreshList(books));
  }, [dispatch]);

  return (
    <div className={s.app}>
      <header className={s.header}>
        <Button onClick={onRefresh}>Refresh</Button>
      </header>
      <main className={s.main}>
        <Books />
        <Shelf size={minWidth} />
      </main>
    </div>
  );
}

export default App;
