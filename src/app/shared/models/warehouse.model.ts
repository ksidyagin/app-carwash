import { ActOfDebiting } from "./act-of-debiting.model";
import { Category } from "./category.model";
import { InternalDisplacement } from "./internal-displacement.model";
import { Product } from "./product.model";
import { ReceiptInvoice } from "./receipt-invoice.model";

export interface Warehouse 
{
         id?: number;
         name?: string;
         products?: Product[];
         service_category?: Category;
         receipt_invoices?: ReceiptInvoice[];
         
         acts_of_debiting?: ActOfDebiting[];
     
         internal_displacements?: InternalDisplacement[];
     
}