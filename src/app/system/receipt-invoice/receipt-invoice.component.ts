import { Component, OnInit } from '@angular/core';
import {Carwash} from "../../shared/models/carwash.model";
import {Category} from "../../shared/models/category.model";
import {Service} from "../../shared/models/service.model";
import {ActivatedRoute, Router} from "@angular/router";
import {CarwashService} from "../../shared/services/carwash/carwash.service";
import {CategoryService} from "../../shared/services/category/category.service";
import {ServiceService} from "../../shared/services/service/service.service";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReceiptInvoiceService } from 'src/app/shared/services/receipt-invoice/receipt-invoice.service';
import { ReceiptInvoice } from 'src/app/shared/models/receipt-invoice.model';
import { Warehouse } from 'src/app/shared/models/warehouse.model';
import { WarehouseService } from 'src/app/shared/services/warehouse/warehouse.service';

@Component({
  selector: 'app-receipt-invoice',
  templateUrl: './receipt-invoice.component.html',
  styleUrls: ['./receipt-invoice.component.scss']
})
export class ReceiptInvoiceComponent implements OnInit {
  carwash: Carwash;
  categories: Category[] = [];
  warehouses: Warehouse[] = [];
  receiptForm: FormGroup;
  constructor(private actRoute: ActivatedRoute,
              private  carwashService: CarwashService, private categoryService: CategoryService,
              private receiptService : ReceiptInvoiceService, private router: Router, 
              private warehouseService: WarehouseService) { }
  ngOnInit(): void {
    this.carwashService.findOne(this.actRoute.snapshot.params['id']).subscribe((carwash: Carwash) => {
      this.carwash = carwash;
      this.categories = this.carwash.service_categories;
      for(let i : number = 0; i < this.carwash.service_categories.length; i++)
      {
        this.categoryService.findOne(this.categories[i].id).subscribe((category: Category) => {
          for(let j = 0; j < category.warehouses.length; j++)
          {
            this.warehouses.push(category.warehouses[j]);
          }
        });
      }
    });
    this.receiptForm = new FormGroup({
      provider: new FormControl('', [Validators.required]),
      comment: new FormControl('', [Validators.required]),
      incoming_number: new FormControl('', [Validators.required]),
      warehouse_entry: new FormControl(0, [Validators.required]),
      date: new FormControl('', [Validators.required]),
      name_product: new FormControl('', [Validators.required]),
      packaging: new FormControl('', [Validators.required]),
      count: new FormControl(0, [Validators.required]),
      price: new FormControl(0, [Validators.required]),
      sum: new FormControl(0, [Validators.required])
    })
  }

  createReceipt(): void {
    if(this.receiptForm.invalid){
      return;
    }
    let warehouse: Warehouse;

     const receipt: ReceiptInvoice = {
      id: 0,
      provider: this.receiptForm.get('provider').value,
      comment: this.receiptForm.get('comment').value,
      incoming_number: this.receiptForm.get('incoming_number').value,
      date: this.receiptForm.get('date').value,
      date_receipt: this.receiptForm.get('date').value,
      name_product: this.receiptForm.get('name_product').value,
      packaging: this.receiptForm.get('packaging').value,
      count: Number( this.receiptForm.get('count').value),
      sum: Number( this.receiptForm.get('sum').value),
      warehouse_entry: this.receiptForm.get('warehouse_entry').value,
      price: Number(this.receiptForm.get('price').value)
      
     }
     this.receiptService.create(receipt).subscribe();
     location.reload();
    }

}
