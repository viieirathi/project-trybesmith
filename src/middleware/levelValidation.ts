import { NextFunction, Request, Response } from 'express';
import { IUser } from '../interfaces/user';

export default class MidLevelValidat {
  constructor(private midLevelValidat: IUser) {}

  public static levelValidation = 
  async (req: Request, res: Response, next: NextFunction):Promise<void> => {
    const { level }: IUser = req.body;
    if (level === undefined) {
      res.status(400).json({ error: 'Level is required' });
      return;
    }
    if (typeof level !== 'number') {
      res.status(422).json({ error: 'Level must be a number' });
      return;
    }
    if (level <= 0) {
      res.status(422).json({ error: 'Level must be greater than 0' });
      return;
    }
    next();
  };
}