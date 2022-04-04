import { NextFunction, Response, Request } from 'express';

export default class Error {
  public static handleError(err: Error, req: Request, res: Response, _next: NextFunction) {
    res.status(500).json({ message: 'Error' });
  }
}