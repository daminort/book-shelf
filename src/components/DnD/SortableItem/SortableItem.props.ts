import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface SortableItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  id: string;
};

export type {
  SortableItemProps,
}
