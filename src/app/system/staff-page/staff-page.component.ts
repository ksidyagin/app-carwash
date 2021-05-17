import { Component, OnInit } from '@angular/core';
import {Carwash} from "../../shared/models/carwash.model";
import {Category} from "../../shared/models/category.model";
import {Service} from "../../shared/models/service.model";
import {ActivatedRoute, Router} from "@angular/router";
import {CarwashService} from "../../shared/services/carwash/carwash.service";
import {CategoryService} from "../../shared/services/category/category.service";
import {ServiceService} from "../../shared/services/service/service.service";

@Component({
  selector: 'app-staff-page',
  templateUrl: './staff-page.component.html',
  styleUrls: ['./staff-page.component.scss']
})
export class StaffPageComponent implements OnInit {

  carwash: Carwash;

  constructor(private actRoute: ActivatedRoute,
              private  carwashService: CarwashService, private categoryService: CategoryService) { }
  ngOnInit(): void {
    this.carwashService.findOne(this.actRoute.snapshot.params['id']).subscribe((carwash: Carwash) => {
      this.carwash = carwash;

  });
  }

}
