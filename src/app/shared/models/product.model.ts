import { Warehouse } from "./warehouse.model";

export interface Product 
{
     id?: number;
     name?: string;
     count?: number;
     measurement?: string;
     warehouse?: Warehouse;

    
}