import { NextFunction, Response, Request } from 'express';
import ProductsService from '../services/products';

export default class ProductsController {
  constructor(private productsService = new ProductsService()) {}

  public listProductsAll = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const products = await this.productsService.getAll();
      return res.status(200).json(products);
    } catch (error) { 
      next(error);
    }
  };

  public createProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, amount } = req.body;
      const productsCreate = await this.productsService.create({ name, amount });
      return res.status(201).json(productsCreate);
    } catch (error) {
      next(error);
    }
  };
}