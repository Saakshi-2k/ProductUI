import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addretailer',
  templateUrl: './addretailer.component.html',
  styleUrls: ['./addretailer.component.css']
})
export class AddretailerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addForVerify(){
    console.log('clicked. Sent for verification');
  }

}
