import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface ShelfProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size: number,
};

export type {
  ShelfProps,
}
