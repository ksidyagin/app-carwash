import { ClientAuto } from "./client-auto.model";
import { Order } from "./order.model";
import { User } from "./user.model";

export interface Client 
{
  id?: number;
  user_entry?: User;
  description?: string;
  name?: string;
  phone?: string;
  visits?: number;
  first_visit?: Date;
  last_visit?: Date;
  total_amount?: number;
  average_check?: number;
  cars?: ClientAuto[];
  orders?: Order[];
}