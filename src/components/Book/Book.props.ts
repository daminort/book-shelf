import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Book } from 'interfaces/books.interface';

interface BookProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {};

interface BookProps extends Book {
  onRemove: (name: string) => void;
};

export type {
  BookProps,
}
