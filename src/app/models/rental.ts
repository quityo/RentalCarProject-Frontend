export interface Rental{
    rentalId?:number;
    carId:number;
    brandName : string;
    colorName:string;
    dailyPrice : number;
    description : string;
    customerId : number;
    rentDate:Date;
    returnDate?:Date;
   
}
export interface RentalDetail extends Rental{
    carId:number;
    companyName:string;
    firstName:string;
    lastName:string;
    brandName:string;
    colorName:string;
    description:string;
    modelYear:number;
    dailyPrice:number;
    carName: string;
}