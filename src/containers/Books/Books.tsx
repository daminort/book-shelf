import React, { FC, useCallback } from 'react';
import { ReactSortable } from 'react-sortablejs';

import { IBook } from 'interfaces/books.interface';
import { useDispatch, useSelector } from 'state';
import { booksActions, booksSelectors } from 'state/Books';

import { Book } from 'components';

import s from './Books.module.css';

const Books: FC = () => {

  const dispatch = useDispatch();
  const list = useSelector(booksSelectors.getList);

  const mutableList = list.map(item => {
    return {
      ...item,
    }
  });

  const onSetList = useCallback((resList: IBook[]) => {
    dispatch(booksActions.refreshList(resList));
  }, [dispatch]);

  const onRemove = useCallback((name: string) => {
    const resList = list.filter(book => book.name !== name);
    dispatch(booksActions.refreshList(resList));
  }, [list, dispatch]);

  return (
    <ReactSortable
      list={mutableList}
      setList={onSetList}
      animation={500}
      className={s.container}
    >
      {list.map((book) => (
        <Book
          key={book.id}
          onRemove={onRemove}
          {...book}
        />
      ))}
    </ReactSortable>
  );
};

export { Books };
