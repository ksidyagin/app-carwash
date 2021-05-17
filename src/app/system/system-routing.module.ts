import {NgModule} from "@angular/core";

import { Routes, RouterModule } from '@angular/router';
import {SystemComponent} from "./system.component";
import {PriceListPageComponent} from "./price-list-page/price-list-page.component";
import {StaffPageComponent} from "./staff-page/staff-page.component";
import {SettingsPageComponent} from "./settings-page/settings-page.component";
import {PaymentsPageComponent} from "./payments-page/payments-page.component";
import {ReviewsPageComponent} from "./reviews-page/reviews-page.component";
import {ClientsPageComponent} from "./clients-page/clients-page.component";
import {HomeComponent} from "./home/home.component";
import {CarwashesComponent} from "./carwashes/carwashes.component";
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {NomenclatureComponent} from "./nomenclature/nomenclature.component";
import {WarehouseComponent} from "./warehouse/warehouse.component";
import {AnalyticsComponent} from "./analytics/analytics.component";
import {AdminsComponent} from "./admins/admins.component";
import {ManagersComponent} from "./managers/managers.component";
import {ExecutorsComponent} from "./executors/executors.component";
import {ExecutorsPercentsComponent} from "./executors-percents/executors-percents.component";
import {LeftoversComponent} from "./warehouse/leftovers/leftovers.component";
import {DocumentsComponent} from "./warehouse/documents/documents.component";
import {DirectoryComponent} from "./warehouse/directory/directory.component";
import {MainComponent} from "./main/main.component";
import {WorkersOneComponent} from "./main/workers-one/workers-one.component";
import {BroadcastComponent} from "./broadcast/broadcast.component";
import {VideoarchiveComponent} from "./videoarchive/videoarchive.component";
import {StatisticsComponent} from "./statistics/statistics.component";
import { AuthGuard } from "../shared/guards/auth.guard";
import {HistorySmsComponent} from "./history-sms/history-sms.component";
import {CafeComponent} from "./analytics/cafe/cafe.component";
import {CarwashComponent} from "./analytics/carwash/carwash.component";
import {TireserviceComponent} from "./analytics/tireservice/tireservice.component";
import {DalingComponent} from "./analytics/daling/daling.component";
import {WorkersTwoComponent} from "./main/workers-two/workers-two.component";
import {WorkersTreeComponent} from "./main/workers-tree/workers-tree.component";
import {MovingComponent} from "./moving/moving.component";
import {ReceiptInvoiceComponent} from "./receipt-invoice/receipt-invoice.component";
import {ActDebitingComponent} from "./act-debiting/act-debiting.component";

const routes: Routes = [
  { path: '', component: SystemComponent, children: [
      { path: 'home', component:HomeComponent },
      { path: 'broadcast/:id', component:BroadcastComponent, canActivate: [AuthGuard] },
      {path:'videoarchive/:id', component: VideoarchiveComponent, canActivate: [AuthGuard]},
      {path:'statistics/:id', component: StatisticsComponent, canActivate: [AuthGuard]},
      { path: 'price-list-page', component: PriceListPageComponent, canActivate: [AuthGuard]},
      { path: 'price-list-page/:id', component: PriceListPageComponent, canActivate: [AuthGuard]},
      {path:'nomenclature', component: NomenclatureComponent, canActivate: [AuthGuard]},
      {path:'nomenclature/:id', component: NomenclatureComponent, canActivate: [AuthGuard]},
      { path: 'warehouse/:id', component: WarehouseComponent, canActivate: [AuthGuard], children: [
          {path:'leftovers', component: LeftoversComponent},
          {path:'documents', component: DocumentsComponent},
          { path:'directory', component: DirectoryComponent}
          
        ]},
      { path:'analytics/:id', component: AnalyticsComponent, canActivate: [AuthGuard], children: [
          {path:'carwash', component: CarwashComponent},
          {path:'tireservice', component: TireserviceComponent},
          {path:'daling', component: DalingComponent},
          {path:'cafe', component: CafeComponent},
        ]},
      { path: 'staff-page/:id', component: StaffPageComponent, canActivate: [AuthGuard]},
      {path:'admins/:id', component: AdminsComponent, canActivate: [AuthGuard]},
      {path:'executors/:id', component: ExecutorsComponent, canActivate: [AuthGuard]},
        {path:'executors-percents/:id', component: ExecutorsPercentsComponent},
      {path:'managers/:id', component: ManagersComponent, canActivate: [AuthGuard]},
      {path:'settings-page/:id', component:SettingsPageComponent, canActivate: [AuthGuard]},
      {path:'payments-page/:id', component: PaymentsPageComponent, canActivate: [AuthGuard]},
      {path:'reviews-page/:id', component: ReviewsPageComponent, canActivate: [AuthGuard]},
      {path:'clients-page/:id', component: ClientsPageComponent, canActivate: [AuthGuard]},
      {path:'history-sms/:id', component: HistorySmsComponent, canActivate: [AuthGuard]},
      {path:'login', component: LoginComponent},
      {path:'carwashes', component: CarwashesComponent, canActivate: [AuthGuard]},
      {path:'carwashes/:page', component: CarwashesComponent, canActivate: [AuthGuard]},
      {path:'registration', component: RegistrationComponent },
      { path: 'main/:id', component: MainComponent, canActivate: [AuthGuard], children: [
          {path:'workers-one', component: WorkersOneComponent},
          {path:'workers-two', component: WorkersTwoComponent},
          {path:'workers-tree', component: WorkersTreeComponent},
        ]},
      {path:'receipt-invoice/:id', component: ReceiptInvoiceComponent, canActivate: [AuthGuard]},
      {path:'act-debiting/:id', component: ActDebitingComponent,canActivate: [AuthGuard]},
      {path:'moving/:id', component: MovingComponent, canActivate: [AuthGuard]},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SystemRoutingModule { }
