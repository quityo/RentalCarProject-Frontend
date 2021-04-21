import { Car } from "./car";


export interface Brand{
    brandId:number;
    brandName:string; 
    cars : Car[];
    
}