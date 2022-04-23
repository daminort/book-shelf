import React, { FC, useCallback } from 'react';

import { useDispatch, useSelector } from 'state';
import { booksActions, booksSelectors } from 'state/Books';

import { Book } from 'components';

import s from './Books.module.css';

const Books: FC = () => {

  const dispatch = useDispatch();
  const list = useSelector(booksSelectors.getList);

  const onRemove = useCallback((name: string) => {
    const resList = list.filter(book => book.name !== name);
    dispatch(booksActions.refreshList(resList));
  }, [list, dispatch]);

  return (
    <div className={s.container}>
      {list.map((book, index) => (
        <Book
          key={index}
          onRemove={onRemove}
          {...book}
        />
      ))}
    </div>
  );
};

export { Books };
