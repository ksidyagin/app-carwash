import { Component, OnInit } from '@angular/core';
import { DatatransferService } from "../../shared/services/datatransfer.service";
import { ActivatedRoute, Router } from '@angular/router';
import { Carwash } from 'src/app/shared/models/carwash.model';
import { CarwashService } from 'src/app/shared/services/carwash/carwash.service';


@Component({
  selector: 'app-carwashes',
  templateUrl: './carwashes.component.html',
  styleUrls: ['./carwashes.component.scss']
})
export class CarwashesComponent implements OnInit {
  carwashes: Carwash[] = [];
  private page: string;

  constructor(private carwashService: CarwashService,
  private router: Router,
  private actRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.carwashService.find().subscribe((carwashes: Carwash[]) => {
      this.carwashes = carwashes;
    });
   this.page = this.actRoute.snapshot.params['page'];
  }

  selectCarwash(id: number) {
    this.router.navigate(['/'+this.page, id]);
  }

}
