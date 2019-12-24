import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'app/shared/service.service';
import { StudentDetails } from 'app/model/StudentDetails.model';

@Component({
  selector: 'app-studentdash',
  templateUrl: './studentdash.component.html',
  styleUrls: ['./studentdash.component.scss']
})
export class StudentdashComponent implements OnInit {

 

  constructor(private shared:ServiceService) { }

  ngOnInit() {
   
  }

}
