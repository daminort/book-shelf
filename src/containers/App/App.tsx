import React, { useEffect, useCallback } from 'react';

import { useDispatch, useSelector } from 'state';
import { booksActions, booksSelectors } from 'state/Books';

import { Button, Shelf } from 'components';
import { Books } from 'containers/Books';

import s from './app.module.css';

function App() {

  const dispatch = useDispatch();
  const shelfSize = useSelector(booksSelectors.getShelfSize);

  useEffect(() => {
    dispatch(booksActions.listReload());
  }, [dispatch]);

  const onRefresh = useCallback(() => {
    dispatch(booksActions.listReload());
  }, [dispatch]);

  return (
    <div className={s.app}>
      <header className={s.header}>
        <Button onClick={onRefresh}>Refresh</Button>
      </header>
      <main className={s.main}>
        <Books />
        <Shelf size={shelfSize} />
      </main>
    </div>
  );
}

export default App;
