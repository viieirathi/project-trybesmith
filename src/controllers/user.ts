import { NextFunction, Response, Request } from 'express';
import jwtGenerator from '../helpers/jwtGenerator';
import UserService from '../services/user';

export default class UserController {
  constructor(private userService = new UserService()) {}

  public createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username, classe, level, password } = req.body;
      await this.userService.create({
        username,
        classe,
        level,
        password,
      });
      const token = jwtGenerator({ username, level });
      res.status(201).json({ token });
    } catch (error) {
      next(error);
    } 
  };
}
