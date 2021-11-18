import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HttpHandler } from "@angular/common/http"
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HeaderComponent } from './components/header/header.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { NpoCardsComponent } from './components/npo-cards/npo-cards.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { OrganisationService } from './services/organisationService.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CheckoutComponent,
    HeaderComponent,
    ProductDetailComponent,
    DiscoverComponent,
    NpoCardsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [OrganisationService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }