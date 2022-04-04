import { NextFunction, Request, Response } from 'express';
import { IUser } from '../interfaces/user';

export default class MidPasswordValidat {
  constructor(private midPasswordValidat: IUser) {}

  public static passwordValidation = 
  async (req: Request, res: Response, next: NextFunction):Promise<void> => {
    const { password }: IUser = req.body;
    if (!password) {
      res.status(400).json({ error: 'Password is required' });
      return;
    }
    if (typeof password !== 'string') {
      res.status(422).json({ error: 'Password must be a string' });
      return;
    }
    if (password.length < 8) {
      res.status(422).json({ error: 'Password must be longer than 7 characters' });
      return;
    }
    next();
  };
}