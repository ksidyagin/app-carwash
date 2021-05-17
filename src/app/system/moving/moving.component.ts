import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Carwash } from 'src/app/shared/models/carwash.model';
import { Category } from 'src/app/shared/models/category.model';
import { InternalDisplacement } from 'src/app/shared/models/internal-displacement.model';
import { Warehouse } from 'src/app/shared/models/warehouse.model';
import { CarwashService } from 'src/app/shared/services/carwash/carwash.service';
import { CategoryService } from 'src/app/shared/services/category/category.service';
import { InternalDisplacementService } from 'src/app/shared/services/internal-displacement/internal-displacement.service';
import { WarehouseService } from 'src/app/shared/services/warehouse/warehouse.service';

@Component({
  selector: 'app-moving',
  templateUrl: './moving.component.html',
  styleUrls: ['./moving.component.scss'],
})
export class MovingComponent implements OnInit {
  displacementForm: FormGroup;
  carwash: Carwash;
  categories: Category[] = [];
  warehouses: Warehouse[] = [];
  constructor(
    private actRoute: ActivatedRoute,
    private carwashService: CarwashService,
    private categoryService: CategoryService,
    private displacementService: InternalDisplacementService,
    private router: Router,
    private warehouseService: WarehouseService
  ) {}

  ngOnInit(): void {
    this.carwashService
      .findOne(this.actRoute.snapshot.params['id'])
      .subscribe((carwash: Carwash) => {
        this.carwash = carwash;
        this.categories = this.carwash.service_categories;
        for (let i: number = 0;i < this.carwash.service_categories.length; i++) {
          this.categoryService
            .findOne(this.categories[i].id)
            .subscribe((category: Category) => {
              for (let j = 0; j < category.warehouses.length; j++) {
                this.warehouses.push(category.warehouses[j]);
              }
            });
        }
      });
    this.displacementForm = new FormGroup({
      comment: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      warehouse_deleted: new FormControl(0, [Validators.required]),
      warehouse_added: new FormControl(null, [Validators.required]),
      name_product: new FormControl('', [Validators.required]),
      packaging: new FormControl('', [Validators.required]),
      count: new FormControl(0, [Validators.required]),
    });
  }

  createDisplacement(): void {
    if (this.displacementForm.invalid) {
      return;
    }
    let warehouse: Warehouse;

    const receipt: InternalDisplacement = {
      id: 0,
      comment: this.displacementForm.get('comment').value,
      date: this.displacementForm.get('date').value,
      warehouse_deleted: this.displacementForm.get('warehouse_deleted').value,
      warehouse_added: this.displacementForm.get('warehouse_added').value,
      date_receipt: this.displacementForm.get('date').value,
      name_product: this.displacementForm.get('name_product').value,
      packaging: this.displacementForm.get('packaging').value,
      count: Number(this.displacementForm.get('count').value),
    };
    this.displacementService.create(receipt).subscribe();
    location.reload();
  }
}
