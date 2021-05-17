import {NgModule} from "@angular/core";

import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "./main.component";
import {WorkersOneComponent} from "./workers-one/workers-one.component";
import {WorkersTwoComponent} from "./workers-two/workers-two.component";
import {WorkersTreeComponent} from "./workers-tree/workers-tree.component";



const routes: Routes = [
  { path: 'main', component: MainComponent, children: [
      {path:'workers-one', component: WorkersOneComponent},
      {path:'workers-two', component: WorkersTwoComponent},
      {path:'workers-tree', component: WorkersTreeComponent},
    ]}
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MainRoutingModule{ }
