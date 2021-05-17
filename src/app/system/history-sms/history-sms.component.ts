import { Component, OnInit } from '@angular/core';
import {Carwash} from "../../shared/models/carwash.model";
import {Category} from "../../shared/models/category.model";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {CarwashService} from "../../shared/services/carwash/carwash.service";
import {CategoryService} from "../../shared/services/category/category.service";

@Component({
  selector: 'app-history-sms',
  templateUrl: './history-sms.component.html',
  styleUrls: ['./history-sms.component.scss']
})
export class HistorySmsComponent implements OnInit {

  carwash: Carwash;
  categories: Category[] = [];

  constructor(private actRoute: ActivatedRoute,  private formBuilder: FormBuilder,
              private  carwashService: CarwashService, private categoryService: CategoryService,
  ) { }

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

}
