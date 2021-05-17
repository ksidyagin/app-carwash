import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
import {MainComponent} from "./main.component";
import {MenuWorkersComponent} from "./shared/menu-workers/menu-workers.component";
import { WorkersOneComponent } from './workers-one/workers-one.component';
import {MainRoutingModule} from "./main-routing.module";
import { WorkersTwoComponent } from './workers-two/workers-two.component';
import { WorkersTreeComponent } from './workers-tree/workers-tree.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MainRoutingModule
  ],
  declarations: [
    MainComponent,
    MenuWorkersComponent,
    WorkersOneComponent,
    WorkersTwoComponent,
    WorkersTreeComponent
  ]
})

export class MainModule{ }
