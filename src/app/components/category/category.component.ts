import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  //sort
  sFlag: number = -1;
  asc: boolean = true;
  desc: boolean = false;

  //filter
  pCat: string = '';
  pLower: number = 0;
  pUpper: number = 0;

  //item-product 
  @Input()
  productList: Product[] = [];
  prod: any;
  products=new Array<Product>();

  constructor(private prodService: ProductService, 
    private router:Router, private route:ActivatedRoute) {
      this.prod = new Product();
      this.route.queryParams.subscribe((params)=>{
        console.log(" Params"+params);
        this.products=params.data as Product[];
        console.log("products"+this.products);
      })
     }

  ngOnInit(): void {
  }

  //filter category
  onFilterCatClick() {
    console.log("clicked");
    if (this.pCat == '') {
      alert('Enter values to filter category');
    } else {
      this.prodService
        .findByCategory(this.pCat)
        .subscribe((data) => {
          console.log(data);
          this.products = data as Product[];
        });
        let data:any=this.products
        this.router.navigate(['showItem'],
        {queryParams:{data:JSON.stringify(data)}})
    }
  }

  //filter price
  onFilterPriceClick() {
    console.log("clicked");
    if (this.pLower == 0 && this.pUpper == 0) {
      alert('Enter values to filter category');
    } else {
      this.prodService
        .findProductByPrice(this.pLower, this.pUpper)
        .subscribe((data) => {
          console.log(data);
          this.products = data as Product[];

        });
        let data:any=this.products
        this.router.navigate(['showItem'],
        {queryParams:{data:JSON.stringify(data)}})
    }
  }

  //sort according to price
  onPriceSortClick() {
    console.log("clicked");
    if(this.asc===true){
      this.products=this.products.sort((a,b)=>{
        if(a.price>b.price){
          return 1;
        }
        else if(a.price<b.price){
          return -1;
        }
        else
          return 0;
      });
    }
    // if (this.desc === false && this.asc === false) {
    //   alert('Select Order');
    // } else if (this.asc === true) {
    //   this.sFlag = 1;
    //   this.asc = false;
    //   this.prodService
    //     .sortProduct('valueprice', 1)
    //     .subscribe((data) => {
    //       console.log(data);
    //       this.products =data as Product[];
    //     });
    // } else {
    //   this.sFlag = 0;
    //   this.desc = false;
    //   this.prodService
    //     .sortProduct('valueprice', 0)
    //     .subscribe((data) => {
    //       console.log(data);
    //       this.products = data as Product[];
    //     });
    // }
  }

  //item component
  // showProductById(productItem: Product){
  //   console.log("clicked");
  //   this.router.navigate(['/',productItem.prodid]);//id is undefined
  // }
}
