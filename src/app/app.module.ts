import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation/navigation.component';
import { LogoComponent } from './navigation/logo/logo.component';
import { SigninBtnComponent } from './navigation/signin-btn/signin-btn.component';
import { NavigationListComponent } from './navigation/navigation-list/navigation-list.component';
import { HeroComponent } from './hero/hero.component';
import { HeroGridComponent } from './hero/hero-grid/hero-grid.component';
import { PricingComponent } from './pricing/pricing.component';
import { CardComponent } from './pricing/card/card.component';
import { OffersComponent } from './offers/offers.component';
import { OffersCardComponent } from "./offers/card/card.component";
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LogoComponent,
    SigninBtnComponent,
    NavigationListComponent,
    HeroComponent,
    HeroGridComponent,
    PricingComponent,
    CardComponent,
    OffersComponent,
    OffersCardComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
