export type QueryKey = string | (string | object)[];

export interface QueryParams {
  page?: number;
  pageSize?: number;
  filter?: Record<string, any>;
  id?: number;
}

export interface QueryError {
  message: string;
}
