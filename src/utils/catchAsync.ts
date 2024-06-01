/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response, NextFunction } from 'express';

const errorResponseResult = (
  statusCode: number,
  res: Response,
  data: any,
  baseUrl: string,
  method: string
): void => {
  res.status(statusCode).json({
    status: 'error',
    data,
    Url: baseUrl,
    method: `/${method}`,
    has_more: false,
  });
};


type AsyncFunction<T extends Request> = (req: T, res: Response, next: NextFunction) => Promise<void>;

const catchAsync = <T extends Request>(fn: AsyncFunction<T>) => {
  return (req: T, res: Response, next: NextFunction): void => {
    fn(req, res, next).catch((err: any) => {

      if (err.name === 'MongoServerError' && err.code === 11000) {
        // Handle duplicate key error...
      } else if (err.message.includes('EHOSTUNREACH') || err.message.includes('ENETUNREACH')) {
        // Handle network errors...
      } else if (err.message === 'jwt malformed') {
        // Handle JWT errors...
      } else if (err.name === 'ValidationError') {
        // Handle validation errors...
      } else {
        // Handle other errors...
      }
    });
  };
};

export default catchAsync;