import { API_URL } from '../../constants/api';
import { IGetListResponse } from './books.dto';

async function getList(): Promise<IGetListResponse> {
  const result: IGetListResponse = await fetch(API_URL).then(res => res.json());
  return result;
}

const booksService = {
  getList,
};

export {
  booksService,
}
