import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface BadgeProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  type: 'single' | 'double';
  color: string;
  lineColor: string;
};

export type {
  BadgeProps,
}
