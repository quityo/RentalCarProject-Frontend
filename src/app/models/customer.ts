


export interface Customer{
    
    customerId:number;
    userId:number;
    firstName:string;
    lastName:string;
    companyName:string;
    email : string;
    status:boolean;
    customerFindex : number;
}
    export interface CustomerDetail extends Customer{
        firstName:string;
        lastName:string;
        companyName:string;
    }
