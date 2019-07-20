import { Component } from '@angular/core';
import { SearchService } from "../../shared/services/search.service";
import { ShortBook } from "../../models/book";
import { Observable, of } from "rxjs";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent {

  foundElements: Observable<ShortBook>;

  constructor(private searchService: SearchService) { }

  onSearchingType(searchString: string) {
    if (searchString.length > 3) {
      this.foundElements = this.searchService.short(searchString);
    } else {
      this.foundElements = of();
    }
  }
}
