import { ResultSetHeader } from 'mysql2';
import mysql from './connection';
import { IProduct } from '../interfaces/IProduct';

export default class ProductModel {
  private connection = mysql;

  public create = async (product: IProduct): Promise<IProduct> => {
    const { name, amount } = product;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );

    const [dataInserted] = result;
    const { insertId } = dataInserted;

    return { id: insertId, ...product };
  };
}