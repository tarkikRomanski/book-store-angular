import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from "./header/header.module";
import { CartService } from "./shared/services/cart.service";
import { WishListService } from "./shared/services/wish-list.service";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule
  ],
  providers: [
      CartService,
      WishListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
