import { Warehouse } from "./warehouse.model";

export interface InternalDisplacement {
    id?: number;
    comment?: string;
    warehouse_deleted?: Warehouse;
    warehouse_added?: Warehouse;
    name_product?: string;
    packaging?: string;
    count?: number;
    date?: Date;
    date_receipt?: Date;
}