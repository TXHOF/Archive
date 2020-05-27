import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { HttpClientModule, HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatMenuModule} from '@angular/material/menu';
import { SearchPageComponent } from './search-page/search-page.component';
import { UniqueVRLComponent } from './unique-vrl/unique-vrl.component';
import {LogInComponent} from "./log-in/log-in.component";
import {ReactiveFormsModule} from "@angular/forms";
import { FormsModule } from '@angular/forms';
import {Mock404Component} from './mock404/mock404.component';

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SearchPageComponent,
    UniqueVRLComponent,
    LogInComponent,
    Mock404Component
  ],
  imports: [

    BrowserModule,
	HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
	MatSliderModule,
	MatToolbarModule,
	MDBBootstrapModule.forRoot(),
	MatMenuModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
