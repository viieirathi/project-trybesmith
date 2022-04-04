import connection from '../models/connection';
import OrdersModel from '../models/orders';

export default class OrdersService {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  public async getOrdersAll() {
    const result = await this.model.ordersAll();
    return result;
  }
}