import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  //populate products from api here
  products: Product[] = [];

  baseUrl: string = 'http://localhost:9798//categoryRest/api/';

  constructor(private httpClient: HttpClient) {}

  findByCategory(category: string) {
    return this.httpClient.get<Product[]>(
      this.baseUrl + '/findByCategory/' + category
      ); //url
  }
  
  findByName(name: string) {
    return this.httpClient.get<Product[]>(
      this.baseUrl + '/findByName/' + name
      ); //url
  }

  findProductByPrice(lower: number, upper: number) {
    return this.httpClient.get<Product[]>(
      this.baseUrl + '/findProductByPrice/' + lower + '/' + upper
    ); //url
  }
  sortProduct(value: string, order: number) {
    return this.httpClient.get<Product[]>(
      this.baseUrl + '/sortProduct/' + value + '/' + order
    ); //url
  }
}
