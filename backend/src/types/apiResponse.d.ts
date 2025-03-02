import { Nazareno } from './nazareno';
import { Token } from './users';

type Data<T> = T;

interface ApiResponse<T> {
  suscces: boolean;
  message?: string;
  data: Data<T>;
}

export { ApiResponse };
