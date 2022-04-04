import { Pool, ResultSetHeader } from 'mysql2/promise';

export default class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public ordersAll = async () => {
    const query = `SELECT O.id, O.userId, JSON_ARRAYAGG(P.id) as products 
    FROM Trybesmith.Orders as O
    INNER JOIN Trybesmith.Products as P on P.orderId = O.id 
    GROUP BY O.id
    ORDER BY O.userId`;
    const [result] = await this.connection.execute<ResultSetHeader>(query);
    return result;
  };
}