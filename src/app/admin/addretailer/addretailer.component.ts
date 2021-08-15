import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/app/admin';
import { AdminService } from 'src/app/services1/admin.service';

@Component({
  selector: 'app-addretailer',
  templateUrl: './addretailer.component.html',
  styleUrls: ['./addretailer.component.css']
})

export class AddretailerComponent implements OnInit {

  //retailer=new Array<Admin>();
  retailer:Admin = new Admin();

  constructor(private adminService: AdminService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }
//on submitting new Retailers detail save the data in table:
  onSubmit(){
    console.log(this.retailer);
    this. saveRetailer();
  }

  //save retailers details in table:
  saveRetailer(){
    this.adminService.addRetailers(this.retailer).subscribe(data=>{
      console.log(data);
      this.retailersList()
    })
  }
//after saving the data navigate to admin profile for verification:
  retailersList(){
    this.router.navigate(['/adminProfile']);
  }
}
