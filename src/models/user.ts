import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interfaces/user';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public create = async ({ username, classe, level, password }: IUser) => {
    const query = `INSERT INTO Trybesmith
      .Users (username, classe, level, password) VALUES (?, ?, ?, ?)`;
    const [result] = await this.connection.execute<ResultSetHeader>(query, [
      username,
      classe,
      level,
      password,
    ]);
    return result;
  };
}
