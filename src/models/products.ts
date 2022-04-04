import { Pool, ResultSetHeader } from 'mysql2/promise';
import { Items } from '../interfaces/itensProducts';
import { IProducts } from '../interfaces/products';

export default class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public productsAll = async (): Promise<IProducts[]> => {
    const query = 'SELECT * FROM Trybesmith.Products';
    const result = await this.connection.execute(query);
    const [rows] = result;
    return rows as IProducts[];
  };

  public create = async (products: IProducts): Promise<Items> => {
    const { name, amount } = products;
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
    const [result] = await this.connection.execute<ResultSetHeader>(query, [
      name,
      amount,
    ]);
    const { insertId } = result;
    return { item: { id: insertId, name, amount } };
  };
}
