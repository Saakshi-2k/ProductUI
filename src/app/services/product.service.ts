import { Injectable } from '@angular/core';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
//populate products from api here

  products: Product[]=[
    new Product(1,'Product1','Product Description item 1', 10000),
    new Product(2,'Product2','Product Description item 2', 20000),
    new Product(3,'Product3','Product Description item 3', 30000),
    new Product(4,'Product4','Product Description item 4', 40000),
    new Product(5,'Product5','Product Description item 5', 50000),
    new Product(6,'Product6','Product Description item 6', 60000)
  ]

  constructor() { }

  getProducts(): Product[]{
    return this.products
  }
}
