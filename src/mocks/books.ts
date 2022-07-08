import { IBook } from 'interfaces/books.interface';
import { commonUtils } from 'utils/common.utils';
import { v4 as uuid } from 'uuid';

function generateBook(name: string): IBook {
  const pages = Math.floor(Math.random() * 8 + 5) * 5;
  const size = name.length * 10 + 50;
  const color = commonUtils.randomColor();

  return {
    id: uuid(),
    name,
    pages,
    size,
    cover: color,
  };
}

const books: IBook[] = [
  generateBook('A Short Story'),
  generateBook('The Druid'),
  generateBook('Project Hail Mary'),
  generateBook('Starship For Sale'),
  generateBook('Compelled'),
  generateBook('Dune'),
  generateBook('The Ninth Metal'),
  generateBook('The Midnight Library'),
  generateBook('Quicksilver'),
  generateBook('Rejected'),
  generateBook('Demon Blood'),
  generateBook('Sun Crossed'),
  generateBook('The Uploaded'),
  generateBook('Zodiac'),
  generateBook('A True Story'),
];

const minWidth = books.reduce((res, book) => {
  return res + book.pages;
}, 0);

export {
  books,
  minWidth,
}
