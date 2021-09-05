import { User } from "./user";



export interface Customer{
    
    customerId:number;
    userId:number;
    firstName:string;
    lastName:string;
    companyName:string;
    email : string;
    status:boolean;
    customerFindex : number;
    name:string;
    user:User[];
}
    export interface CustomerDetail extends Customer{
        firstName:string;
        lastName:string;
        companyName:string;
    }
