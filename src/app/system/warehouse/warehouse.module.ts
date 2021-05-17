import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
import {WarehouseComponent} from "./warehouse.component";
import { DocumentsComponent } from './documents/documents.component';
import { LeftoversComponent } from './leftovers/leftovers.component';
import {WarehouseRoutingModule} from "./warehouse-routing.module";
import { DirectoryComponent } from './directory/directory.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    WarehouseRoutingModule

  ],
  declarations: [
    WarehouseComponent,
    DocumentsComponent,
    LeftoversComponent,
    DirectoryComponent
  ]
})

export class WarehouseModule { }
