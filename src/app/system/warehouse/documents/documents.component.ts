import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActOfDebiting } from 'src/app/shared/models/act-of-debiting.model';
import { Carwash } from 'src/app/shared/models/carwash.model';
import { Category } from 'src/app/shared/models/category.model';
import { InternalDisplacement } from 'src/app/shared/models/internal-displacement.model';
import { Product } from 'src/app/shared/models/product.model';
import { ReceiptInvoice } from 'src/app/shared/models/receipt-invoice.model';
import { Warehouse } from 'src/app/shared/models/warehouse.model';
import { ActDebitingService } from 'src/app/shared/services/act-debiting/act-debiting.service';
import { CarwashService } from 'src/app/shared/services/carwash/carwash.service';
import { CategoryService } from 'src/app/shared/services/category/category.service';
import { InternalDisplacementService } from 'src/app/shared/services/internal-displacement/internal-displacement.service';
import { ProductService } from 'src/app/shared/services/product/product.service';
import { ReceiptInvoiceService } from 'src/app/shared/services/receipt-invoice/receipt-invoice.service';
import { WarehouseService } from 'src/app/shared/services/warehouse/warehouse.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {

  serviceFormIsOpen: boolean;
  categories: Category[] = [];
  warehouses: Warehouse[] = [];
  products: Product[] = [];
  carwash: Carwash;
  actsOfDebiting: ActOfDebiting[] = [];
  receiptInvoices: ReceiptInvoice[] = [];
  internalDisplacements: InternalDisplacement[] = [];

  id: number;
  constructor(private actRoute: ActivatedRoute,
              private  carwashService: CarwashService, private categoryService: CategoryService,
              private warehouseService : WarehouseService, 
              private router: Router, 
              private productService: ProductService,
              private actDebitingService: ActDebitingService,
              private receiptInvoiceService: ReceiptInvoiceService,
              private internalDisplacementService: InternalDisplacementService
               ) { }
  ngOnInit(): void {
    this.serviceFormIsOpen = false;
    this.id = this.actRoute.snapshot.parent.params['id'];
    this.carwashService.findOne(this.id).subscribe((carwash: Carwash) => {
      this.carwash = carwash;
      this.categories = this.carwash.service_categories;
      for(let i : number = 0; i < this.carwash.service_categories.length; i++)
      {
        this.categoryService.findOne(this.categories[i].id).subscribe((category: Category) => {
          this.categories[i].warehouses = category.warehouses; 
          this.actDebitingService.find().subscribe((acts: ActOfDebiting[]) => {
            for(let k = 0; k < acts.length; k++){
              for(let j = 0; j < this.categories[i].warehouses.length; j++){
                if(acts[k].warehouse_deleted.id == this.categories[i].warehouses[j].id){
                  this.actsOfDebiting.push(acts[k]);
                  break;
                }
              }
            }
          });
          this.receiptInvoiceService.find().subscribe((invoices: ReceiptInvoice[]) => {
            for(let k = 0; k < invoices.length; k++){
              for(let j = 0; j < this.categories[i].warehouses.length; j++){
                if(invoices[k].warehouse_entry.id == this.categories[i].warehouses[j].id){
                  this.receiptInvoices.push(invoices[k]);
                  break;
                }
              }
            }
          });
          this.internalDisplacementService.find().subscribe((displacement: InternalDisplacement[]) => {
            for(let k = 0; k < displacement.length; k++){
              for(let j = 0; j < this.categories[i].warehouses.length; j++){
                if(displacement[k].warehouse_added.id == this.categories[i].warehouses[j].id){
                  this.receiptInvoices.push(displacement[k]);
                  break;
                }
              }
            }
          });
        });
        
      }
      
    });

  }


}
