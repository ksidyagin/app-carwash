import { Carwash } from "./carwash.model";
import { Service } from "./service.model";
import { Warehouse } from "./warehouse.model";

export interface Category {
  id?: number;
    name?: string;
    services?: Service[];
    carwash?: Carwash;
    warehouses?: Warehouse[];

}