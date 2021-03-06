import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  
  //search
  pSearch: string='';

  //sort
  sFlag: number = -1;
  asc: boolean = true;
  desc: boolean = true;

  //filter
  pCat: string = '';
  pBrand:string='';
  pLower: number = 0;
  pUpper: number = 0;

  //item-product
  @Input()
  prod: any;
  products = new Array<Product>();

  constructor(
    private prodService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.prod = new Product();
    this.route.queryParams.subscribe((params) => {
      console.log(' Params' + params);
      this.products = params.data as Product[];
      console.log('products' + this.products);
    });
  }

  ngOnInit(): void {}

  //search by keyword
  searchKeyword(){
    console.log('clicked');
    if(this.pSearch==''){
      alert('Enter keyword to search');
    }
    else {
      this.prodService
      .getProductBySearch(this.pSearch).subscribe((data) => {
        console.log(data);
        this.products = data as Product[];
      });
      // let data: any = this.products;
      // this.router.navigate(['showItem'], {
      //   queryParams: { data: JSON.stringify(data) },
      // });
  }
}

  //filter category
  onFilterCatClick() {
    console.log('clicked');
    if (this.pCat == '') {
      alert('Enter values to filter category');
    } else {
      this.prodService
      .findByCategory(this.pCat).subscribe((data) => {
        console.log(data);
        this.products = data as Product[];
      });
      // let data: any = this.products;
      // this.router.navigate(['showItem'], {
      //   queryParams: { data: JSON.stringify(data) },
      // });
    }
  }

  //filter brand
  onFilterBrandClick(){
    console.log('clicked');
    if (this.pBrand == '') {
      alert('Enter values to filter category');
    } else {
      this.prodService
      .findByName(this.pBrand).subscribe((data) => {
        console.log(data);
        this.products = data as Product[];
      });
      // let data: any = this.products;
      // this.router.navigate(['showItem'], {
      //   queryParams: { data: JSON.stringify(data) },
      // });
    }
  }

  //filter price
  onFilterPriceClick() {
    console.log('clicked');
    if (this.pLower == 0 && this.pUpper == 0) {
      alert('Enter values to filter category');
    } else {
      this.prodService
        .findProductByPrice(this.pLower, this.pUpper)
        .subscribe((data) => {
          console.log(data);
          this.products = data as Product[];
        });
      // let data: any = this.products;
      // this.router.navigate(['showItem'], {
      //   queryParams: { data: JSON.stringify(data) },
      // });
    }
  }

  //sort according to price
  onPriceSortClickAsc() {
    console.log('clicked');
    if (this.asc === true) {
      this.products = this.products.sort((a, b) => {
        if (a.price > b.price) {
          return 1;
        } else if (a.price < b.price) {
          return -1;
        } else return 0;
      });
    }}
    onPriceSortClickDes() {
      console.log('clicked');
    if(this.desc===true){
      this.products = this.products.sort((a, b) => {
        if (a.price < b.price) {
          return 1;
        } else if (a.price > b.price) {
          return -1;
        } else return 0;
      });
    }
  }
}
