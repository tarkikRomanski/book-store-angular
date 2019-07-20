import { Component, Input } from '@angular/core';
import { ShortBook } from "../../../models/book";

@Component({
  selector: 'search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.sass']
})
export class SearchItemComponent {
  @Input() book: ShortBook;
}
