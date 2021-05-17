import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CarwashService} from "../../shared/services/carwash/carwash.service";
import {CategoryService} from "../../shared/services/category/category.service";
import {ServiceService} from "../../shared/services/service/service.service";
import {Carwash} from "../../shared/models/carwash.model";
import {Category} from "../../shared/models/category.model";

@Component({
  selector: 'app-executors',
  templateUrl: './executors.component.html',
  styleUrls: ['./executors.component.scss']
})
export class ExecutorsComponent implements OnInit {
  carwash: Carwash;
  constructor(private actRoute: ActivatedRoute,
  private  carwashService: CarwashService, private categoryService: CategoryService,
  private serviceService : ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.carwashService.findOne(this.actRoute.snapshot.params['id']).subscribe((carwash: Carwash) => {
      this.carwash = carwash;
    });
  }


  home(): void
      {
        this.router.navigate(['','executors-percents',this.carwash.id]);
      }


}
