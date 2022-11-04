import { ResultSetHeader, RowDataPacket } from 'mysql2';
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

  public getAll = async (): Promise<IProduct[]> => {
    const [rows] = await this.connection.execute<IProduct[] & RowDataPacket[]>(`
    SELECT * FROM Trybesmith.Products`);

    return rows;
  };
}