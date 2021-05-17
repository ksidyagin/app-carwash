import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Carwash } from 'src/app/shared/models/carwash.model';
import { Category } from 'src/app/shared/models/category.model';
import { Service } from 'src/app/shared/models/service.model';
import { CarwashService } from 'src/app/shared/services/carwash/carwash.service';
import { CategoryService } from 'src/app/shared/services/category/category.service';
import { ServiceService } from 'src/app/shared/services/service/service.service';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent implements OnInit {

  serviceFormIsOpen: boolean;
  carwash: Carwash;
  id: number;

  constructor(private actRoute: ActivatedRoute,
              private  carwashService: CarwashService, private categoryService: CategoryService,
              private serviceService : ServiceService, private router: Router) { }
  ngOnInit(): void {
    this.serviceFormIsOpen = false;
    
    this.carwashService.findOne(this.actRoute.snapshot.params['id']).subscribe((carwash: Carwash) => {
      this.carwash = carwash;
      
    });
  }
  openServiceForm(){
    this.serviceFormIsOpen = true;
  }

  closeServiceForm(){
    this.serviceFormIsOpen = false;
  }


}

