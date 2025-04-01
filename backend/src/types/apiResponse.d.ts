import { Nazareno } from './nazareno';
import { Token } from './users';

type Data<T> = T;

interface ApiResponse<T> {
  suscces: boolean;
  message?: string;
  data: Data<T>;
}

export interface PaginationData<T> {
  cotent: Data<T>;
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export { ApiResponse, PaginationData };
