import { IUser } from '../interfaces/user';
import connection from '../models/connection';
import UserModel from '../models/user';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(user: IUser) {
    return this.model.create(user);
  }
}

export default UserService;