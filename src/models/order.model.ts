import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { INewOrder, IOrder } from '../interfaces/IOrder';
import mysql from './connection';

export default class OrderModel {
  public connection = mysql;

  public getAll = async (): Promise<IOrder[]> => {
    const [rows] = await this.connection.execute<IOrder[] & RowDataPacket[]>(`
    SELECT O.id, O.userId, json_arrayagg(P.id) as 'productsIds'
    FROM
      Trybesmith.Orders AS O
    INNER JOIN
      Trybesmith.Products AS P
    ON  P.orderId = O.id
    GROUP BY O.id;`);

    return rows;
  };

  public create = async (order: INewOrder): Promise<boolean> => {
    const { userId, productsIds } = order;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders (userId) VALUES (?)',
      [userId],
    );

    if (insertId) {
      await Promise.all(productsIds.map(async (prod) => {
        await this.connection.execute<ResultSetHeader>(
          'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?',
          [insertId, prod],
        );
      }));
      return true;
    }

    return false;
  };
}