import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productList: Product[] = [];
  prod: any;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    // this.productService.getAllProducts().subscribe((data: any) => {
    //   console.log(data);
    //   this.prod = data;
    //   console.log(this.prod);
    // });
  }
}
