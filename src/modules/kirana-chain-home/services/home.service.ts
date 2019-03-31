import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) {

   }

  public getPriceList():any{
     return this.http.get('../price-list.json');
   }
}
