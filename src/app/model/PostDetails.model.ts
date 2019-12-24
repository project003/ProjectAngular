import { LoginDetails } from "./LoginDetails.model";
import { CommentDetails } from "./Comment.model";
import { LikeDetails } from "./LikeDetails.model";

export class PostDetails
{
    pId:number;
	pText:string;
	pdate:Date;
	slike:LikeDetails;
    scomment:CommentDetails[];
}