import { RowDataPacket } from 'mysql2';
import { IOrder } from '../interfaces/IOrder';
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
}