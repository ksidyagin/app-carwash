import { Component, OnInit } from '@angular/core';
import {Carwash} from "../../shared/models/carwash.model";
import {Category} from "../../shared/models/category.model";
import {Service} from "../../shared/models/service.model";
import {ActivatedRoute, Router} from "@angular/router";
import {CarwashService} from "../../shared/services/carwash/carwash.service";
import {CategoryService} from "../../shared/services/category/category.service";
import {ServiceService} from "../../shared/services/service/service.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  isBurgerClicked = false;
  isSearchClicked = false;

  carwash: Carwash;
  categories: Category[] = [];
  laundryServices: Service[] = [];

  constructor(private actRoute: ActivatedRoute,
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
  }

  clickBurger() {
    this.isBurgerClicked = !this.isBurgerClicked;
  }
}
