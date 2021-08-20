import { CarImage } from "./carImage";
export interface Car{
    carId:number;
    carName:string;
    brandName:string;
    colorName : string;
    modelYear : number;
    dailyPrice : number;
    description : string;
    brandId:number;
    colorId:number;
    imagePath:string;
    status?:boolean;
    carImages : CarImage[];
}
export interface CarDetail extends Car{
    colorName:string;
    brandName:string;
}
