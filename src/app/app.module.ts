import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation/navigation.component';
import { LogoComponent } from './navigation/logo/logo.component';
import { SigninBtnComponent } from './navigation/signin-btn/signin-btn.component';
import { NavigationListComponent } from './navigation/navigation-list/navigation-list.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LogoComponent,
    SigninBtnComponent,
    NavigationListComponent,
    HeroComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
