import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IBook } from 'interfaces/books.interface';

interface BookProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {};

interface BookProps extends Omit<IBook, 'id'> {
  onRemove: (name: string) => void;
};

export type {
  BookProps,
}
