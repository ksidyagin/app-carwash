import { Warehouse } from "./warehouse.model";

export interface ActOfDebiting {
    id?: number;
    comment?: string;
    warehouse_deleted?: Warehouse;
    name_product?: string;
    packaging?: string;
    count?: number;
    date?: Date;
    date_event?: Date;
}