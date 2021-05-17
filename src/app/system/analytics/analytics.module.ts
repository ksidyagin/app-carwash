import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
import {AnalyticsComponent} from "./analytics.component";
import {CarwashComponent} from "./carwash/carwash.component";
import {TireserviceComponent} from "./tireservice/tireservice.component";
import { DalingComponent } from './daling/daling.component';
import { CafeComponent } from './cafe/cafe.component';
import {AnalyticsRoutingModule} from "./analytics-routing.module";


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AnalyticsRoutingModule

  ],
  declarations: [
    AnalyticsComponent,
    CarwashComponent,
    TireserviceComponent,
    DalingComponent,
    CafeComponent
  ]
})

export class AnalyticsModule { }
