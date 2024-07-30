import { NextFunction, Request, Response } from 'express';
 
export class customError extends Error {
  errorMessage: string;
  errorCode: number;
  customErrorCode?: number;
  constructor(
    errorMessage: string,
    errorCode: number,
    customErrorCode?: number
  ) {
    super(errorMessage);
    this.errorMessage = errorMessage;
    this.errorCode = errorCode;
    this.customErrorCode = customErrorCode;
  }
}

export const errorHandlers = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof customError) {
    return res.status(error.errorCode).json(error.errorMessage);
  }
  return res.status(500).json({ error: error });
};


