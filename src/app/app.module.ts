import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SystemComponent } from './system/system.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {SystemModule} from "./system/system.module";
import { AuthentificationService } from './shared/services/authentification/authentification.service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadScriptDirective } from './shared/directives/load-script.directive';
import { JwtInterceptor } from './shared/interceptors/jwt.interceptor';
import { PhoneMaskDirective } from './shared/directives/phone-mask.directive';

const appRoutes: Routes = [
  { path: 'system', component: SystemComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoadScriptDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    SystemModule
  ],
  providers: [
    AuthentificationService,
     JwtHelperService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
