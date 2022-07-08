import React, { FC } from 'react';

import { ShelfProps } from './Shelf.props';
import s from './Shelf.module.css';

const Shelf: FC<ShelfProps> = ({ size }) => {

  if (!size) {
    return null;
  }

  const style = {
    width: size + 120,
  }

  return (
    <div className={s.container} style={style} />
  );
};

export { Shelf };
