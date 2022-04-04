import { Book } from 'interfaces/books.interface';
import { randomColor } from 'utils/common.utils';

function generateBook(name: string): Book {
  const pages = Math.floor(Math.random() * 8 + 5) * 5;
  const size = name.length * 10 + 50;
  const color = randomColor();

  return {
    name,
    pages,
    size,
    cover: color,
  };
}

const books: Book[] = [
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
];

const minWidth = books.reduce((res, book) => {
  return res + book.pages;
}, 0);

export {
  books,
  minWidth,
}
