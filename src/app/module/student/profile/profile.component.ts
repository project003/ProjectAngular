import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'app/shared/service.service';
import { StudentDetails } from 'app/model/StudentDetails.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  username:string;
  password:string;

  stu:StudentDetails;

  
  constructor(private shared:ServiceService) { }

  ngOnInit() {
   this.stu=JSON.parse(sessionStorage.getItem('studentDetailsData'));
    
  }
 

}
