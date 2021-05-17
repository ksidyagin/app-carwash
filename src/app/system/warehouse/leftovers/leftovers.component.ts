import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Carwash } from 'src/app/shared/models/carwash.model';
import { Category } from 'src/app/shared/models/category.model';
import { Product } from 'src/app/shared/models/product.model';
import { Warehouse } from 'src/app/shared/models/warehouse.model';
import { CarwashService } from 'src/app/shared/services/carwash/carwash.service';
import { CategoryService } from 'src/app/shared/services/category/category.service';
import { ProductService } from 'src/app/shared/services/product/product.service';
import { WarehouseService } from 'src/app/shared/services/warehouse/warehouse.service';

@Component({
  selector: 'app-leftovers',
  templateUrl: './leftovers.component.html',
  styleUrls: ['./leftovers.component.scss']
})
export class LeftoversComponent implements OnInit {

  serviceFormIsOpen: boolean;
  carwash: Carwash;
  categories: Category[] = [];
  warehouses: Warehouse[] = [];
  products: Product[] = [];
  id: number;
  constructor(private actRoute: ActivatedRoute,
              private  carwashService: CarwashService, private categoryService: CategoryService,
              private warehouseService : WarehouseService, private router: Router, private productService: ProductService) { }
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
          
        });
        
      }
      this.productService.find().subscribe((products: Product[]) => {
        this.products = products;
      });
    });
  }

  trackCategory(index, category) {
      return category.id;
  }
}
