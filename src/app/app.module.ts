import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from "./header/header.module";
import { CartService } from "./shared/services/cart.service";
import { WishListService } from "./shared/services/wish-list.service";
import { SearchService } from "./shared/services/search.service";
import { ApiConnector } from "./shared/classes/ApiConnector";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HeaderModule
  ],
  providers: [
    CartService,
    WishListService,
    SearchService,
    ApiConnector
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
