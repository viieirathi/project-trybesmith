import { NextFunction, Request, Response } from 'express';
import { IUser } from '../interfaces/user';

export default class MidUserValidat {
  constructor(private midUserValidat: IUser) {}

  public static userValidation = 
  async (req: Request, res: Response, next: NextFunction):Promise<void> => {
    const { username }: IUser = req.body;
    if (!username) {
      res.status(400).json({ error: 'Username is required' });
      return;
    }
    if (typeof username !== 'string') {
      res.status(422).json({ error: 'Username must be a string' });
      return;
    }
    if (username.length <= 2) {
      res.status(422).json({ error: 'Username must be longer than 2 characters' });
      return;
    }
    next();
  };
}