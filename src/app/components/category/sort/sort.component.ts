import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css'],
})
export class SortComponent implements OnInit {
  constructor(private prodService: ProductService) {}

  products = [];
  sFlag: number = 0;
  desc: boolean = false;
  asc: boolean = false;
  ngOnInit(): void {}

  onNameSortClick() {
    if (this.desc === false && this.asc === false) {
      alert('Select Order');
    } else if (this.asc === true) {
      this.sFlag = 1;
      this.asc = false;
      this.products = [];
      this.prodService
        .sortProduct('valuename', 1)
        .subscribe((data: Product[]) => {
          console.log(data);
          this.products = [];
        });
    } else {
      this.sFlag = 0;
      this.desc = false;
      this.products = [];
      this.prodService
        .sortProduct('valuename', 0)
        .subscribe((data: Product[]) => {
          console.log(data);
          this.products = [];
        });
    }
  }

  onPriceSortClick() {
    if (this.desc === false && this.asc === false) {
      alert('Select Order');
    } else if (this.asc === true) {
      this.sFlag = 1;
      this.asc = false;
      this.products = [];
      this.prodService
        .sortProduct('valueprice', 1)
        .subscribe((data: Product[]) => {
          console.log(data);
          this.products = [];
        });
    } else {
      this.sFlag = 0;
      this.desc = false;
      this.products = [];
      this.prodService
        .sortProduct('valueprice', 0)
        .subscribe((data: Product[]) => {
          console.log(data);
          this.products = [];
        });
    }
  }
}
