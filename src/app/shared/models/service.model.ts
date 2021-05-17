import { Category } from "./category.model";

export interface Service {
     id?:  number;
     description?:  string;
     price?: number;
     category?: Category;

}