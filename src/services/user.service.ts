import jsonwebtoken from 'jsonwebtoken';
import { IUser } from '../interfaces/IUser';
import UserModel from '../models/user.model';

export default class UserService {
  public user = new UserModel();

  public jwt = jsonwebtoken;

  public generateToken = async (user: IUser) => {
    const payload = { id: user.id, username: user.username };
    return this.jwt
      .sign(payload, process.env.JWT_SECRET as string, { algorithm: 'HS256', expiresIn: '1d' });
  };

  public create = async (user: IUser) => {
    const createdUser = await this.user.create(user);
    const token = await this.generateToken(createdUser);
    return { token };
  };
}