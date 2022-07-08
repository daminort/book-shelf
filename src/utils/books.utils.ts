import { IBook } from 'interfaces/books.interface';
import { IGetListResponse } from 'services/books';
import { commonUtils } from 'utils/common.utils';

function processResponse(response: IGetListResponse): IBook[] {

  const rawBooks = response?.results?.books || [];

  const books: IBook[] = rawBooks.map(rawBook => {
    const book: IBook = {
      id: rawBook.book_uri,
      name: rawBook.title,
      cover: commonUtils.randomColor(),
      pages: Math.floor(Math.random() * 8 + 5) * 5,
      size: rawBook.title.length * 10 + 50,
    };

    return book;
  });

  return books;
}

const booksUtils = {
  processResponse,
}

export {
  booksUtils,
}
