import React, { FC } from 'react';

import { ButtonProps } from './Button.props';
import s from './Button.module.css';

const Button: FC<ButtonProps> = ({ onClick, children }) => {

  return (
    <button className={s.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export { Button };
