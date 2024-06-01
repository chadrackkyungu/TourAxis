//**************** response type*****************
export interface StandardResponse<T> {
  status: 'success' | 'error' | 'fail';
  message?: string;
  length?: number | string;
  data?: T;
}

