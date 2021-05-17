import { Component, OnInit } from '@angular/core';
import { NewsModelServer, SalesModelServer } from "../../shared/models/home.component.model";
import {DatatransferService} from "../../shared/services/datatransfer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  news: NewsModelServer[] = [];
  sales: SalesModelServer[] = [];
  constructor(private transferService: DatatransferService,  private router: Router) { }

  // slideConfig = { "slidesToShow": 2, "slidesToScroll": 2, "autoplay": true, "autoplaySpeed": 4000 };

  slideConfig = {
    "dots": true,
    "infinite": true,
    "arrows": false,
    "speed": 300,
    "slidesToShow": 3,
    "slidesToScroll": 3,
    "responsive": [{
      "breakpoint": 1024,
      "settings": {
        "slidesToShow": 3,
        "slidesToScroll": 3,
        "infinite": true,
        "dots": true
      }
    },
    {
      "breakpoint": 600,
      "settings": {
        "slidesToShow": 2,
        "slidesToScroll": 2
      }
    },
    {
      "breakpoint": 480,
      "settings": {
        "slidesToShow": 1.75,
        "slidesToScroll": 1
      }
    }]
  };


  ngOnInit(): void {
    // this.transferService.getNews().subscribe((news: NewsModelServer[]) => {
    //   this.news = news;
    // });
    // this.transferService.getSales().subscribe((sales: SalesModelServer[]) => {
    //   this.sales = sales;
    // });
  }
 carWash()
  {
    this.router.navigate(['','carwashes']);
  }

  public onMapReady(event) {
    console.log("Map Ready")
  }
}
