import { Warehouse } from "./warehouse.model";

export interface ReceiptInvoice {

    id?: number;
    provider?: string;
    comment?: string;
    incoming_number?: string;   
    warehouse_entry?: Warehouse;
    date?: Date;
    date_receipt?: Date;
    name_product?: string;
    packaging?: string;
    count?: number;
    price?: number;
    sum?: number;
}