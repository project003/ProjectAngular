import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'app/shared/service.service';
import { PostDetails } from 'app/model/PostDetails.model';
import { CommentDetails } from 'app/model/Comment.model';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent  {

  postDetails:PostDetails[];

  comment:string;

  commentD:CommentDetails=
  {
    cid:null,
	ctext:'',
	cdate:null

  }

  constructor(private shared:ServiceService) { }

  ngOnInit() {
  
    this.shared.getAllpost().subscribe((data:PostDetails[])=>{this.postDetails=data;
      console.log(data);

    });
   
  }

  getDatareload()
  {
    this.shared.getAllpost().subscribe((data:PostDetails[])=>{this.postDetails=data;
      console.log(data);

    });
  }

  likeClicks=0;
  flag=0;
  likeFunction()
  { 
    
    if(this.flag==0)
    {
    this.likeClicks=this.likeClicks+1;
    this.flag++;
    }
  }

  unlikeFunction()
  {
    if(this.likeClicks>0)
    this.likeClicks=this.likeClicks-1;
    this.flag--;
  }

  addComment(p:PostDetails)
  {
    console.log("in add comment")
    console.log(p.pId);
    console.log(this.commentD);
    this.shared.addComment(this.commentD,p.pId).subscribe(result=>{}) ;  

    this.getDatareload;
  
  }

}
