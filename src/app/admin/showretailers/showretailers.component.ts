import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/app/admin';
import { AdminService } from 'src/app/services1/admin.service';

@Component({
  selector: 'app-showretailers',
  templateUrl: './showretailers.component.html',
  styleUrls: ['./showretailers.component.css']
})
export class ShowretailersComponent implements OnInit {

  constructor(
    private adminService: AdminService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  retArray = new Array<Admin>();

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

}
