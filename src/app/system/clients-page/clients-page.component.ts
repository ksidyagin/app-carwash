import { Component, OnInit } from '@angular/core';
import {Carwash} from "../../shared/models/carwash.model";
import {Category} from "../../shared/models/category.model";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {CarwashService} from "../../shared/services/carwash/carwash.service";
import {CategoryService} from "../../shared/services/category/category.service";
import { ClientService } from 'src/app/shared/services/client/client.service';
import { Client } from 'src/app/shared/models/client.model';
import { textHeights } from 'ol/render/canvas';

@Component({
  selector: 'app-clients-page',
  templateUrl: './clients-page.component.html',
  styleUrls: ['./clients-page.component.scss']
})
export class ClientsPageComponent implements OnInit {

  carwash: Carwash;
  carwash1: Carwash[]=[];
  categories: Category[] = [];
  clients:Client[]=[];

  constructor(private actRoute: ActivatedRoute,  private formBuilder: FormBuilder,
              private  carwashService: CarwashService, private categoryService: CategoryService,
              private clientService: ClientService
  ) { }

  ngOnInit(): void {
    this.carwashService.findOne(this.actRoute.snapshot.params['id']).subscribe((carwash: Carwash) => {
      this.carwash = carwash;      
    });
    // this.carwashService.find()
    // .subscribe((records:Carwash[])=>{
    //   this.carwash1=records;
    //   for(let i:number=0;i<records.length;i+=1)
    //     {
    //       this.carwash1.push(records[i]);
    //     }
    // });
    //console.log(this.carwash1[0].name);
    this.clientService.find().subscribe((clients:Client[])=>{
      for(let i:number=0;i<clients.length;i+=1)
        {
          this.clients[i]=clients[i];
        }
    });
    console.log(this.clients[0]);
  }
}