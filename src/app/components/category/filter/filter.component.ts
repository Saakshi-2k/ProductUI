import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  prod: Product;
  products = [];
  pCat: string = '';
  pLower: number = 0;
  pUpper: number = 0;
  constructor(private prodService: ProductService) {
    this.prod = new Product();
  }

  ngOnInit(): void {}

  onFilterCatClick() {
    if (this.pCat == '') {
      alert('Enter values to filter category');
    } else {
      this.products = [];
      this.prodService
        .findProductByCategory(this.pCat)
        .subscribe((data: Product[]) => {
          console.log(data);
          this.products = [];
        });
    }
  }

  onFilterPriceClick() {
    if (this.pLower == 0 && this.pUpper == 0) {
      alert('Enter values to filter category');
    } else {
      this.products = [];
      this.prodService
        .findProductByPrice(this.pLower, this.pUpper)
        .subscribe((data: Product[]) => {
          console.log(data);
          this.products = [];
        });
    }
  }

}
