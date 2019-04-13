import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) {

   }

/**
 * 
 * Getting pricelist and explorelist data.
 * 
 */
  public getPriceList():Observable<any> {

    return this.http.get('../../assets/mockdata/price-list.json');

  }

/**
 * 
 * Getting pricelist and explorelist data.
 * 
 */
public getBlockDetail():Observable<any> {

  return this.http.get('../../assets/mockdata/price-list.json');

}

  // public getExploreList():any {

  //   return this.http.get('../../assets/mockdata/explore-list.json');

  // }

}
