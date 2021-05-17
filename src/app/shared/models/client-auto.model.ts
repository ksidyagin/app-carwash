import { Client } from "./client.model";
import { Order } from "./order.model";

export interface ClientAuto 
{
    id?: number;
    brand?: string;
    model?: string;
    category?: string;
    state_number?: string;
    region?: string;
    owner?: Client;
    order_entries?: Order[];

}