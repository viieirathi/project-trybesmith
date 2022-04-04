import ProductsModel from '../models/products';
import { IProducts } from '../interfaces/products';
import connection from '../models/connection';
import { Items } from '../interfaces/itensProducts';

export default class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async getAll(): Promise<IProducts[]> {
    const result = await this.model.productsAll();
    return result;
  }

  public async create(products: IProducts): Promise<Items> {
    return this.model.create(products);
  }
}