import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../admin';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  baseUrl: string = 'http://localhost:9798/categoryRest/api';
  retailers: Admin[] = [];

  constructor(private httpClient: HttpClient) {}

  //show all the retailers entry
  showAllRetailers() {
    return this.httpClient.get<Admin[]>(this.baseUrl + '/showRetailers/');
  }

  addRetailers(retailer:Admin){
    return this.httpClient.post<Admin[]>(this.baseUrl+ '/addRetailers/',retailer);
  }

  //to delete retailer row
  deleteRetailer(rid:number){
    return this.httpClient.delete<Admin[]>(this.baseUrl+ '/adminProfile/'+rid);
  }
}
