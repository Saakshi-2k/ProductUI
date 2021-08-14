import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../admin';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  baseUrl: string = 'http://localhost:9798/';
  retailers: Admin[] = [];

  constructor(private httpClient: HttpClient) {}

  showAllRetailers() {
    return this.httpClient.get<Admin[]>(this.baseUrl + '/showRetailers/'); //url
  }
}
