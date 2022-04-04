import { NextFunction, Request, Response } from 'express';
import { IUser } from '../interfaces/user';

export default class MidClasseValidat {
  constructor(private midClasseValidat: IUser) {}

  public static classeValidation = 
  async (req: Request, res: Response, next: NextFunction):Promise<void> => {
    const { classe }: IUser = req.body;
    if (!classe) {
      res.status(400).json({ error: 'Classe is required' });
      return;
    }
    if (typeof classe !== 'string') {
      res.status(422).json({ error: 'Classe must be a string' });
      return;
    }
    if (classe.length <= 2) {
      res.status(422).json({ error: 'Classe must be longer than 2 characters' });
      return;
    }
    next();
  };
}