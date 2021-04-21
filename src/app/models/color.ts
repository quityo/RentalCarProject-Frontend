import { Car } from "./car";

export interface Color{
    colorId:number;
    colorName:string;
    cars :Car[];
}