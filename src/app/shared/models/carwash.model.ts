import { Category } from "./category.model";

export interface Carwash 
{
    id?: number;
    name?: string;
    address?: string;
    phone?: string;
    workTime_weekday?: string;
    workTime_weekend?: string;
    rating?: number;
    service_categories?: Category[]
}
