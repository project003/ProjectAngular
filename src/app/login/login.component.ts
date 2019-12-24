import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from  '../shared/service.service';
import { StudentDetails } from 'app/model/StudentDetails.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // value = "http://localhost:4200/#/dashboard";
  public show = true;
  public notshow = true;
  public username = '';
  public password = '';
  public email = '';

  loginUserData={};
  //showModal:boolean=false;
  
  loginDetailsId:number;
  constructor(private router: Router,private shared:ServiceService) {}

  ngOnInit() {}

  toggle() {
     console.log('toggle');
     this.show = !this.show;
     //this.showModal= true;
     // CHANGE THE NAME OF THE BUTTON.
   }
   toggle1() {
      this.show = true;
     //CHANGE THE NAME OF THE BUTTON.
    }

    
  login(username, password) {

  
    
    console.log(username,password)
    
    

    this.shared.getData(username,password).subscribe(
      (data:StudentDetails)=>{data;

        
        if (data.loginDetails.status==="active"&&data.loginDetails.role===104) {
          console.log('in student');
          sessionStorage.setItem('studentDetailsData',JSON.stringify(data));
          sessionStorage.setItem('role', 'student');
          this.router.navigateByUrl('role/student/studash');
        }

      //this.shared.stu=this.stu;
      });

   
    
     if (username === 'doctor' && password === 'doctor') {
       console.log('in doctor');
       sessionStorage.setItem('role', 'doctor');
       this.router.navigateByUrl('role/doctor/doctordash');
    }
    if (username === 'emp' && password === 'emp') {
      console.log('in emp');
      sessionStorage.setItem('role', 'emp');
      this.router.navigateByUrl('role/emp/empdash');
    }
    if (username === 'nurse' && password === 'nurse') {
      console.log('in nurse');
      sessionStorage.setItem('role', 'nurse');
      this.router.navigateByUrl('role/nurse/nursedash');
    }
    
    if (username === 'admin' && password === 'admin') {
      console.log('in admin');
      sessionStorage.setItem('role', 'admin');
      this.router.navigateByUrl('role/admin/admindash');
    }
    
  }

  
  
}
