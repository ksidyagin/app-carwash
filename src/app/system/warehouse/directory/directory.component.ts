import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Carwash } from 'src/app/shared/models/carwash.model';
import { Category } from 'src/app/shared/models/category.model';
import { Warehouse } from 'src/app/shared/models/warehouse.model';
import { CarwashService } from 'src/app/shared/services/carwash/carwash.service';
import { CategoryService } from 'src/app/shared/services/category/category.service';
import { WarehouseService } from 'src/app/shared/services/warehouse/warehouse.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {

  serviceFormIsOpen: boolean;
  settingsIsActive: boolean;
  
  carwash: Carwash;
  categories: Category[] = [];
  warehouses: Warehouse[] = [];
  serviceForm: FormGroup;
  selected_category : Category;
  id: number;
  constructor(private actRoute: ActivatedRoute,
              private  carwashService: CarwashService, private categoryService: CategoryService,
              private warehouseService : WarehouseService, private router: Router) { }
  ngOnInit(): void {
    this.serviceFormIsOpen = false;
    this.settingsIsActive = false;
    this.id = this.actRoute.snapshot.parent.params['id'];
    this.carwashService.findOne(this.id).subscribe((carwash: Carwash) => {
      this.carwash = carwash;
      this.categories = this.carwash.service_categories;
      for(let i : number = 0; i < this.carwash.service_categories.length; i++)
      {
        this.categoryService.findOne(this.categories[i].id).subscribe((category: Category) => {
          this.categories[i].warehouses = category.warehouses;
        });
        
      }
    });
    this.serviceForm = new FormGroup({
      name: new FormControl(null, [Validators.required])
    });
  }

  trackCategory(index, category) {
      return category.id;
  }
  openSettings() {
    if(this.settingsIsActive == false){
      this.settingsIsActive = true;
    }
    else{
      this.settingsIsActive = false;
    }
  }
  removeWarehouse(WarehouseId: number): void{
    this.warehouseService.deleteOne(WarehouseId).subscribe();
    location.reload();
  }

  openServiceForm(category: Category){
    this.serviceFormIsOpen = true;
    this.selected_category = category;
  }
  closeServiceForm(){
    this.serviceFormIsOpen = false;
  }
  createService(): void {
    
     const warehouse: Warehouse = {
      id: 0,
      name: this.serviceForm.get('name').value,
      service_category: this.selected_category,
      products: [],
      internal_displacements: [],
      acts_of_debiting: [],
      receipt_invoices: []
     }
     this.warehouseService.create(warehouse).subscribe();
     this.closeServiceForm();
     location.reload();
    }

}
