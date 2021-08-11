import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  //populate products from api here

  products: Product[] = [];

  baseUrl: string = 'http://localhost:9798//categoryRest/api';

  constructor(private httpClient: HttpClient) {}

  // getAllProducts(id: number) {
  //   return this.httpClient.get<Product[]>(this.baseUrl);
  // }
  findProductByCategory(category: string) {
    return this.httpClient.get<Product[]>(this.baseUrl + '//' + category); //url
  }
  findProductByPrice(lower: number, upper: number) {
    return this.httpClient.get<Product[]>(
      this.baseUrl + '//' + lower + '/' + upper
    ); //url
  }

  sortProduct(sname: string, sprice: number) {
    return this.httpClient.get<Product[]>(
      this.baseUrl + '//' + sname + '/' + sprice
    ); //url
  }
}
