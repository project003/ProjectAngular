import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {StudentDetails } from 'app/model/StudentDetails.model';
import { Observable } from 'rxjs';
import { PostDetails } from 'app/model/PostDetails.model';
import { CommentDetails } from 'app/model/Comment.model';

const headerOption ={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  stu:StudentDetails;

  url:string="http://localhost:8081/Student";
  constructor(private http:HttpClient) { }

  getData(username:string,password:string):Observable<StudentDetails>{
    return this.http.get<StudentDetails>(this.url+"/login-stu/"+username+"/"+password);
  }

  getAllpost()
  {
    return this.http.get<PostDetails[]>(this.url+"/getAllpost");
  }

  addComment(comment:CommentDetails, id:number)
  {
    console.log("in shared addcomment")
    console.log(comment);
    console.log(id)
    return this.http.post<CommentDetails>(this.url+"/addComment/"+id,comment);

  }
}
