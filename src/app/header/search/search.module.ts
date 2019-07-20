import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from "./search.component";
import { SearchItemComponent } from "./search-item/search-item.component";


@NgModule({
  declarations: [
      SearchComponent,
      SearchItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchComponent
  ],
  bootstrap: [SearchComponent]
})
export class SearchModule {
}
