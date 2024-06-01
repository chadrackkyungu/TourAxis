class AppError extends Error {
  statusCode: number;
  status: string;
  isOperational: boolean;

  constructor(message: string, statusCode: number) {
    super(message);

    if (!message || typeof message !== 'string') {
      throw new Error('Message must be a string');
    }

    if (!statusCode || typeof statusCode !== 'number') {
      throw new Error('Status code must be a number');
    }

    this.name = 'AppError';
    this.statusCode = statusCode;

    if (statusCode >= 400 && statusCode < 500) {
      this.status = 'fail';
    } else if (statusCode >= 500) {
      this.status = 'error';
    } else {
      this.status = 'unknown';
    }

    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;
