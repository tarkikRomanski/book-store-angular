import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header.component";
import { CartComponent } from './cart/cart.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { SearchModule } from "./search/search.module";


@NgModule({
  declarations: [
    HeaderComponent,
    CartComponent,
    WishListComponent,
  ],
  imports: [
    CommonModule,
    SearchModule
  ],
  exports: [
    HeaderComponent
  ],
  bootstrap: [HeaderComponent]
})
export class HeaderModule {
}
