import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SystemComponent} from "./system.component";
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { PaymentsPageComponent } from './payments-page/payments-page.component';
import { ReviewsPageComponent } from './reviews-page/reviews-page.component';
import { ClientsPageComponent } from './clients-page/clients-page.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HeaderComponent } from './shared/components/header/header.component';
import {SystemRoutingModule} from "./system-routing.module";
import { FooterComponent } from './shared/components/footer/footer.component';
import {DatatransferService} from "../shared/services/datatransfer.service";
import {HomeComponent} from "./home/home.component";
import {CarwashesComponent} from "./carwashes/carwashes.component";
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {StaffPageComponent} from "./staff-page/staff-page.component";
import {AdminsComponent} from "./admins/admins.component";
import {ManagersComponent} from "./managers/managers.component";
import {ExecutorsPercentsComponent} from "./executors-percents/executors-percents.component";
import {ExecutorsComponent} from "./executors/executors.component";
import {PriceListPageComponent} from "./price-list-page/price-list-page.component";
import {NomenclatureComponent} from "./nomenclature/nomenclature.component";
import {MenuComponent} from "./price-list-page/shared/components/menu/menu.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {WarehouseModule} from "./warehouse/warehouse.module";
import {MainModule} from "./main/main.module";
import {BroadcastComponent} from "./broadcast/broadcast.component";
import {VideoarchiveComponent} from "./videoarchive/videoarchive.component";
import {StatisticsComponent} from "./statistics/statistics.component";
import {PodmenuComponent} from "./broadcast/shared/components/podmenu/podmenu.component";
import { CategoryService } from "../shared/services/category/category.service";
import { ServiceService } from "../shared/services/service/service.service";
import { CarwashService } from "../shared/services/carwash/carwash.service";
import { ClientService } from "../shared/services/client/client.service";
import { ClientAutoService } from "../shared/services/client-auto/client-auto.service";
import { OrderService } from "../shared/services/order/order.service";
import { UserService } from "../shared/services/user/user.service";
import { WarehouseService } from "../shared/services/warehouse/warehouse.service";
import { ProductService } from "../shared/services/product/product.service";
import { OlMapComponent } from './ol-map/ol-map.component';
import {HistorySmsComponent} from "./history-sms/history-sms.component";
import {AnalyticsModule} from "./analytics/analytics.module";
import { PhoneMaskDirective } from "../shared/directives/phone-mask.directive";
import {ActDebitingComponent} from "./act-debiting/act-debiting.component";
import {MovingComponent} from "./moving/moving.component";
import {ReceiptInvoiceComponent} from "./receipt-invoice/receipt-invoice.component";

@NgModule({
    imports: [
        CommonModule,
        SystemRoutingModule,
        SlickCarouselModule,
        FormsModule,
        ReactiveFormsModule,
        WarehouseModule,
        MainModule,
        AnalyticsModule
    ],
    declarations: [
        SystemComponent,
        HomeComponent,
        StaffPageComponent,
        SettingsPageComponent,
        PaymentsPageComponent,
        ReviewsPageComponent,
        ClientsPageComponent,
        HeaderComponent,
        FooterComponent,
        LoginComponent,
        RegistrationComponent,
        CarwashesComponent,
        AdminsComponent,
        ManagersComponent,
        ExecutorsPercentsComponent,
        ExecutorsComponent,
        NomenclatureComponent,
        PriceListPageComponent,
        MenuComponent,
        PodmenuComponent,
        BroadcastComponent,
        VideoarchiveComponent,
        StatisticsComponent,
        OlMapComponent,
        HistorySmsComponent,
        PhoneMaskDirective,
        ActDebitingComponent,
        MovingComponent,
        ReceiptInvoiceComponent
        
    ],

    providers: [
        DatatransferService,
        CategoryService,
        ServiceService,
        WarehouseService,
        ProductService,
        CarwashService,
        ClientService,
        ClientAutoService,
        OrderService,
        UserService

    ]
})

export class SystemModule { }
