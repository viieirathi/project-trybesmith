import { NextFunction, Request, Response } from 'express';
import { Items } from '../interfaces/itensProducts';
import { IProducts } from '../interfaces/products';

export default class MidNameValidat {
  constructor(private midNameValidat: Items) {}

  public static nameValidation = 
  async (req: Request, res: Response, next: NextFunction):Promise<void> => {
    const { name }: IProducts = req.body;
    if (!name) {
      res.status(400).json({ error: 'Name is required' });
      return;
    }
    if (typeof name !== 'string') {
      res.status(422).json({ error: 'Name must be a string' });
      return;
    }
  
    if (name.length < 2) {
      res.status(422).json({ error: 'Name must be longer than 2 characters' });
      return;
    }
    next();
  };
}