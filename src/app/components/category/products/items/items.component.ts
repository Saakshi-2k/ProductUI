import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  @Input() productItem!: Product; //error here

  constructor() { 
  }

  ngOnInit(){
  }

}
