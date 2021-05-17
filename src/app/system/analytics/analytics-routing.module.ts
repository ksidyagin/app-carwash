import {NgModule} from "@angular/core";

import { Routes, RouterModule } from '@angular/router';
import {CarwashComponent} from "./carwash/carwash.component";
import {AnalyticsComponent} from "./analytics.component";
import {TireserviceComponent} from "./tireservice/tireservice.component";
import {DalingComponent} from "./daling/daling.component";
import {CafeComponent} from "./cafe/cafe.component";



const routes: Routes = [
  { path: 'analytics', component: AnalyticsComponent, children: [
      {path:'carwash', component: CarwashComponent},
      {path:'tireservice', component: TireserviceComponent},
      {path:'daling', component: DalingComponent},
      {path:'cafe', component: CafeComponent},
    ]}
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AnalyticsRoutingModule { }
