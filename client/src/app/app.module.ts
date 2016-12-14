import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AUTH_PROVIDERS }      from 'angular2-jwt';

//bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//google maps
import { AgmCoreModule } from 'angular2-google-maps/core';
//Snap.svg
//import { snapsvg } from '@types/snapsvg';

//RUTAS
import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthComponent } from './auth/auth.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { PromotionsBrandsComponent } from './promotions-brands/promotions-brands.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    WelcomeComponent,
    HomeComponent,
    PageNotFoundComponent,
    AuthComponent,
    ContactUsComponent,
    PromotionsComponent,
    PromotionsBrandsComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDpfFwJ-TiQ6DLgINZ16AojmrnqEa9BumI'
    })
  ],
  providers: [
    AUTH_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }