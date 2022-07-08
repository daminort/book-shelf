interface IGetListBook {
  book_uri: string;
  title: string;
}

interface IGetListResults {
  books: IGetListBook[];
}

export interface IGetListResponse {
  results: IGetListResults;
}
