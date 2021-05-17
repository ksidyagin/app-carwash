import {NgModule} from "@angular/core";

import { Routes, RouterModule } from '@angular/router';
import {WarehouseComponent} from "./warehouse.component";
import {LeftoversComponent} from "./leftovers/leftovers.component";
import {DocumentsComponent} from "./documents/documents.component";
import { DirectoryComponent } from "./directory/directory.component";



const routes: Routes = [
  { path: 'warehouse', component: WarehouseComponent, children: [
      {path:'leftovers', component: LeftoversComponent},
      {path:'documents', component: DocumentsComponent},
      {path:'directory', component: DirectoryComponent}
    ]}
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WarehouseRoutingModule { }
