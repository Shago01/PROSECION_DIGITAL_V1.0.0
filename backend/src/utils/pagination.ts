export interface PaginationParams {
  page: number;
  limit: number;
  offset: number;
}

export function paginationParams(query: any): PaginationParams {
  const page = Number(query['page']) || 1;
  const limit = Number(query['limit']) || 10;
  const offset = (page - 1) * limit;

  return { page, limit, offset };
}

export function calculateTotalPages(count: number, limit: number): number {
  return Math.ceil(count / limit);
}
