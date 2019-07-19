import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header.component";
import { SearchComponent } from './search/search.component';
import { CartComponent } from './cart/cart.component';
import { WishListComponent } from './wish-list/wish-list.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    CartComponent,
    WishListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent
  ],
  bootstrap: [HeaderComponent]
})
export class HeaderModule {
}
