import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ActOfDebiting } from 'src/app/shared/models/act-of-debiting.model';
import { Carwash } from 'src/app/shared/models/carwash.model';
import { Category } from 'src/app/shared/models/category.model';
import { Service } from 'src/app/shared/models/service.model';
import { Warehouse } from 'src/app/shared/models/warehouse.model';
import { ActDebitingService } from 'src/app/shared/services/act-debiting/act-debiting.service';
import { CarwashService } from 'src/app/shared/services/carwash/carwash.service';
import { CategoryService } from 'src/app/shared/services/category/category.service';
import { ServiceService } from 'src/app/shared/services/service/service.service';
import { WarehouseService } from 'src/app/shared/services/warehouse/warehouse.service';


@Component({
  selector: 'app-act-debiting',
  templateUrl: './act-debiting.component.html',
  styleUrls: ['./act-debiting.component.scss']
})
export class ActDebitingComponent implements OnInit {

  carwash: Carwash;
  categories: Category[] = [];
  warehouses: Warehouse[] = [];
  actForm: FormGroup;
  constructor(private actRoute: ActivatedRoute,
              private  carwashService: CarwashService, private categoryService: CategoryService,
              private serviceService : ServiceService, private router: Router, 
              private warehouseService: WarehouseService,
              private actDebitingService: ActDebitingService) { }
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
    this.actForm = new FormGroup({
      comment: new FormControl('', [Validators.required]),
      warehouse_deleted: new FormControl(0, [Validators.required]),
      date: new FormControl('', [Validators.required]),
      name_product: new FormControl('', [Validators.required]),
      packaging: new FormControl('', [Validators.required]),
      count: new FormControl(0, [Validators.required]),
    })
  
    
  }
  createAct(): void {
    if(this.actForm.invalid){
      return;
    }
   
     const act: ActOfDebiting = {
      id: 0,
      comment: this.actForm.get('comment').value,
      date: this.actForm.get('date').value,
      date_event: this.actForm.get('date').value,
      name_product: this.actForm.get('name_product').value,
      packaging: this.actForm.get('packaging').value,
      count: this.actForm.get('count').value,
      warehouse_deleted: this.actForm.get('warehouse_deleted').value
      
     }
     this.actDebitingService.create(act).subscribe();
     location.reload();
    }


}
