import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable()
export class ApiConnector {
  constructor(private http: HttpClient) {}

  private getUrl(url: string, params: object = {}): string {
    const paramsArray: string[] = [];

    for (const [key, value] of Object.entries(params)) {
      paramsArray.push(`${key}=${value}`);
    }

    return `${environment.apiUrl}/${url}?${paramsArray.join('&')}`;
  }

  public get<T = any>(url: string, params: object = {}): Observable<any> {
    return this.http.get<T>(this.getUrl(url, params));
  }
}
