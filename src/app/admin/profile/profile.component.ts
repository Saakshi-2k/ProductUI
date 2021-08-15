import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/app/admin';
import { AdminService } from 'src/app/services1/admin.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {

  //id:number | undefined;
  retArray = new Array<Admin>();  //getting error

  constructor(
    private adminService: AdminService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getRetailers();
  }

  //call Retailer Array part--->
  private getRetailers() {
    this.adminService.showAllRetailers().subscribe((data) => {
      console.log(data);
      this.retArray = data;
    });
  }

  //delete the row in admins' profile
  deleteRow(rid:number) {
    console.log('clicked');
    this.adminService.deleteRetailer(rid).subscribe((data)=>
    {
      {console.log(data)}
    });
  }

  //To add new retailer
  addNewRetailer() {
    console.log('clicked');
    this.router.navigate(['addRetailers']);
  }
}
