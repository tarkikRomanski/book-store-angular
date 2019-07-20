import { Injectable } from '@angular/core';
import { ApiConnector } from "../classes/ApiConnector";
import { Observable } from "rxjs";
import { FullBook, ShortBook } from "../../models/book";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private api: ApiConnector) {
  }

  public short(searchString: string): Observable<ShortBook> {
    return this.api.get<ShortBook>('search', {s: searchString});
  }

  public full(searchString: string, page: number = 1): Observable<FullBook> {
    return this.api.get<FullBook>(
        'search',
        {
          s: searchString,
          full: 1,
          page
        }
    );
  }
}
