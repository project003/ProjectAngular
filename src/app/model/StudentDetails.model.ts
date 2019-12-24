import { LoginDetails } from "./LoginDetails.model";
import { AddressDetails } from "./AddressDetails.model";

export class StudentDetails{
	id:number;
	firstName:string;
	lastName:string;
	email:string;
	specialization:string;
	contact:string;
	educationDetail:string;
	dob:Date;
	type:string;
	workLocation:string;
	loginDetails:LoginDetails;
	addressDetails:AddressDetails;
}