import React, { FC } from 'react';

import { BadgeProps } from './Badge.props';
import s from './Badge.module.css';

const Badge: FC<BadgeProps> = (props: BadgeProps) => {

  const { id, type, color, lineColor, className, onClick } = props;

  const lineStyle = { background: lineColor };

  const containerCls = className
    ? `${className} ${s.container}`
    : s.container;

  const circleCls = `${s.circle} ${color}Bg`;
  const singleLineCls = `${s.single} ${color}DarkBg`;
  const doubleLineTopCls = `${s.doubleTop} ${color}DarkBg`;
  const doubleLineBottomCls = `${s.doubleBottom} ${color}DarkBg`;

  return (
    <div
      id={id}
      className={containerCls}
      onClick={onClick}
    >
      {type === 'single' && (
        <div className={singleLineCls} />
      )}
      {type === 'double' && (
        <>
          <div className={doubleLineTopCls} style={lineStyle} />
          <div className={doubleLineBottomCls} style={lineStyle} />
        </>
      )}
      <div className={circleCls} />
    </div>
  );
};

export { Badge };
