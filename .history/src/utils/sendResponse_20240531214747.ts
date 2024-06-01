/* eslint-disable @typescript-eslint/no-explicit-any */
// src/utils/sendResponse.ts
import { Response } from 'express';
import { StandardResponse } from '../types/utils';

//*******************Response*******************
export function sendResponse<T>(res: Response, statusCode: number, response: StandardResponse<T>): Response {

  const { status, message, length, data } = response;

  return res.status(statusCode).json({
    status,
    message,
    length,
    data,
  });
}

