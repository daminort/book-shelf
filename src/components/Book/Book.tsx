import React, { FC, useCallback } from 'react';

import { Badge } from 'components/Badge';
import { BookProps } from './Book.props';
import s from './Book.module.css';

const Book: FC<BookProps> = (props: BookProps) => {

  const {
    name,
    cover,
    pages,
    size,
    onRemove,
  } = props;

  const onClickBadge = useCallback(() => {
    onRemove(name);
  }, [name, onRemove]);

  const style = {
    width: pages,
    height: size,
  };

  const bgCls = `${cover}Bg`;
  const borderCls = `${cover}DarkBorder`;
  const bookCls = `${s.book} ${bgCls} ${borderCls}`;

  return (
    <div className={bookCls} style={style}>
      <span className={s.name}>{name}</span>
      <Badge
        className={s.badge}
        type={'single'}
        color={cover}
        lineColor={cover}
        onClick={onClickBadge}
      />
    </div>
  );
};

export { Book };
