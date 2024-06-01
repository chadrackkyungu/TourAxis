/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// Import AppError using ES6 import syntax
import AppError from '../../utils/appError';

// Import types from express for request, response, and next function
import { Request, Response, NextFunction} from 'express';

interface ErrorWithStatusCode extends Error {
    statusCode?: number;
    status?: string;
    isOperational?: boolean;
    errmsg?: string | undefined;
    code?: number;
    // Removed the optional undefined type for 'name' to match Error interface
    errors?: { message: string }[] | undefined;
    path?: string;
    value?: string | undefined;
}
  
const handleCastErrorDB = (err: ErrorWithStatusCode) => {
  const message = `Invalid ${err.path}: ${err.value}.`;
  return new AppError(message, 400);
};

const handleDuplicateFieldsDB = (err: ErrorWithStatusCode) => {
  const matches = err.errmsg?.match(/(["'])(\\?.)*?\1/);
  const value = matches ? matches[0] : 'unknown'; // Use 'unknown' or a similar placeholder if no match is found
  const message = `Duplicate field value: ${value}. Please use another value!`;
  return new AppError(message, 400);
};


const handleValidationErrorDB = (err: any) => {
  // Use optional chaining to safely access message property
  const errors = Object.values(err.errors || {}) // Use empty object if errors is undefined
    .map((el: any) => el?.message);
  const message = `Invalid input data. ${errors.join('. ')}`;
  return new AppError(message, 400);
};

const sendErrorDev = (err: ErrorWithStatusCode, res: Response) => {
  res.status(err.statusCode || 500).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack
  });
};

const sendErrorProd = (err: ErrorWithStatusCode, res: Response) => {
  if (err.isOperational) {
    res.status(err.statusCode || 500).json({
      status: err.status,
      message: err.message
    });
  } else {
    console.error('ERROR ', err);
    res.status(500).json({
      status: 'error',
      message: 'Something went very wrong!'
    });
  }
};

export default (err: ErrorWithStatusCode, req: Request, res: Response, next: NextFunction) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === 'production') {
    let error: ErrorWithStatusCode = { ...err } as ErrorWithStatusCode; // Explicitly cast copied object
    if (error.name === 'CastError') error = handleCastErrorDB(error);
    if (error.code === 11000) error = handleDuplicateFieldsDB(error);
    if (error.name === 'ValidationError') error = handleValidationErrorDB(error);
    sendErrorProd(error, res);
  }
};
