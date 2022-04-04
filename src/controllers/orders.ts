import { NextFunction, Response, Request } from 'express';
import OrdersService from '../services/orders';

export default class OrdersController {
  constructor(private ordersService = new OrdersService()) {}

  public listOrdersAll = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const orders = await this.ordersService.getOrdersAll();
      return res.status(200).json(orders);
    } catch (error) { 
      next(error);
    }
  };
}