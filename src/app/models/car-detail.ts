import { Car } from "./car";

export interface CarDetail extends Car{
    carId:number;
    carName:string;
    brandName:string;
    colorName : string;
    modelYear : number;
    dailyPrice : number;
    description : string;
    status:boolean;
    colorId:number;
    brandId:number;
    carFindex:number;
}