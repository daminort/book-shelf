import React, { FC, useEffect, useState, useCallback } from 'react';

import { Book as IBook} from 'interfaces/books.interface';
import { Book } from 'components';
import { books } from 'mocks/books';

import s from './Books.module.css';

const Books: FC = () => {

  const [list, setList] = useState<IBook[]>([]);

  useEffect(() => {
    setList([...books]);
  }, []);

  const onRemove = useCallback((name: string) => {
    const resList = list.filter(book => book.name !== name);
    setList(resList);
  }, [list, setList]);

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
