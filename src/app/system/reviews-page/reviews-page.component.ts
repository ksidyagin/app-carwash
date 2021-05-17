import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carwash } from 'src/app/shared/models/carwash.model';
import { Order, OrderStatus} from 'src/app/shared/models/order.model';
import { CarwashService } from 'src/app/shared/services/carwash/carwash.service';
import { OrderService } from 'src/app/shared/services/order/order.service';

@Component({
  selector: 'app-reviews-page',
  templateUrl: './reviews-page.component.html',
  styleUrls: ['./reviews-page.component.scss']
})
export class ReviewsPageComponent implements OnInit {
  isBurgerClicked = false;
  rating: number = 0;
  carwash: Carwash;
  reviews: Order[] = [];
  constructor(private orderService: OrderService, private actRoute: ActivatedRoute, private carwashService: CarwashService) { }

  ngOnInit(): void {
    this.carwashService.findOne(this.actRoute.snapshot.params['id']).subscribe((carwash: Carwash) => {
      this.carwash = carwash;
    });
    this.orderService.find().subscribe((orders: Order[])=> {
      let j = 0;
      for(let i = 0; i < orders.length; i++)
      {
        
        if(this.carwash.id == orders[i].carwash_entry.id  && orders[i].status == OrderStatus.finished){
          this.reviews.push(orders[i]);
          this.reviews[j].client_entry = orders[i].client_entry;
          this.rating += this.reviews[j].evaluation;
          j++;
        }
      }
      this.rating = this.rating / j;
    })

    
  }
  clickBurger() {
    this.isBurgerClicked = !this.isBurgerClicked;
  }


}
