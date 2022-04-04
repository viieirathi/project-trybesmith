import { NextFunction, Request, Response } from 'express';
import { Items } from '../interfaces/itensProducts';
import { IProducts } from '../interfaces/products';

export default class MidAmountValidat {
  constructor(private midAmountValidat: Items) {}

  public static amountValidation = 
  async (req: Request, res: Response, next: NextFunction): Promise<void> => { 
    const { amount }: IProducts = req.body;
    if (!amount) {
      res.status(400).json({ error: 'Amount is required' });
      return;
    }
    if (typeof amount !== 'string') {
      res.status(422).json({ error: 'Amount must be a string' });
      return;
    }
    if (amount.length < 2) {
      res
        .status(422)
        .json({ error: 'Amount must be longer than 2 characters' });
      return;
    }
    next();
  };
}
