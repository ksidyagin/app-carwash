import { Carwash } from "./carwash.model";
import { ClientAuto } from "./client-auto.model";
import { Client } from "./client.model";
import { Service } from "./service.model";


export enum OrderStatus {
    accepted = 'accepted',
    completed = 'completed',
    finished = 'finished'
}

export interface Order 
{
    id?: number;
    carwash_entry?: Carwash;
    client_entry?: Client;
    auto?: ClientAuto;
    selected_services?: Service[];
    selected_time?: Date;
    status?: string;
    evaluation?: number;
    comment?: string;
    total_price?: number;
}