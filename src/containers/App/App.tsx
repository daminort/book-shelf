import React from 'react';

import { Button, Shelf } from 'components';
import { Books } from 'containers/Books';
import { minWidth } from 'mocks/books';

import s from './app.module.css';

function App() {
  return (
    <div className={s.app}>
      <header className={s.header}>
        <Button>Refresh</Button>
      </header>
      <main className={s.main}>
        <Books />
        <Shelf size={minWidth} />
      </main>
    </div>
  );
}

export default App;
