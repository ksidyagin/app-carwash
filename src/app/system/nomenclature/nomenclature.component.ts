import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Carwash } from 'src/app/shared/models/carwash.model';
import { Category } from 'src/app/shared/models/category.model';
import { Service } from 'src/app/shared/models/service.model';
import { CarwashService } from 'src/app/shared/services/carwash/carwash.service';
import { CategoryService } from 'src/app/shared/services/category/category.service';
import { ServiceService } from 'src/app/shared/services/service/service.service';

@Component({
  selector: 'app-nomenclature',
  templateUrl: './nomenclature.component.html',
  styleUrls: ['./nomenclature.component.scss']
})
export class NomenclatureComponent implements OnInit {

  carwash: Carwash;
  categories: Category[] = [];
  laundryServices: Service[] = [];
  
  categoryFormIsOpen: boolean;
  serviceFormIsOpen: boolean;

  categoryForm: FormGroup;
  serviceForm: FormGroup;
  selected_category : Category;
  constructor(private actRoute: ActivatedRoute,  private formBuilder: FormBuilder,
  private  carwashService: CarwashService, private categoryService: CategoryService, 
  private serviceService : ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.carwashService.findOne(this.actRoute.snapshot.params['id']).subscribe((carwash: Carwash) => {
      this.carwash = carwash;
      this.categories = this.carwash.service_categories;
      for(let i : number = 0; i < this.carwash.service_categories.length; i++)
      {
        this.categoryService.findOne(this.categories[i].id).subscribe((category: Category) => {
        this.categories[i].services = category.services;
        });
      }
    });
    this.categoryFormIsOpen = false;
    this.serviceFormIsOpen = false;

    this.categoryForm = new FormGroup({
      name: new FormControl(null, [Validators.required])
    });
    this.serviceForm = new FormGroup({
      description: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required])
    });
  }


  openCategoryForm() {
    this.categoryFormIsOpen = true;
  }
  openServiceForm(category: Category){
    this.serviceFormIsOpen = true;
    this.selected_category = category;
  }
  closeCategoryForm(){
    this.categoryFormIsOpen = false;
  }
  closeServiceForm(){
    this.serviceFormIsOpen = false;
  }

  createCategory(): void {
  if(this.categoryForm.invalid){
    return;
  }
    const category: Category = {
    id: 0,
    name : this.categoryForm.get('name').value,
    carwash : this.carwash
   }
   this.categoryService.create(category).subscribe();
   this.closeCategoryForm();
   location.reload();
  }

  createService(): void {
    if(this.serviceForm.invalid){
      return;
    }
    const service: Service = {
      id: 0,
      description: this.serviceForm.get('description').value,
      price: Number(this.serviceForm.get('price').value),
      category: this.selected_category
     }
     this.serviceService.create(service).subscribe();
     this.closeServiceForm();
     location.reload();
    }

    trackCategory(index, category) {
      return category.id;

  }

}
