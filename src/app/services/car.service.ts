import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../models/car';
import { CarDetail } from '../models/car-detail';
import { ItemResponseModel, ListResponseModel, ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  getRentalByCarId(carId: any) {
    throw new Error('Method not implemented.');
  }

  

  constructor(private httpClient: HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    //gelen datayı CarResponseModel ' a map edeceksin.
    let newPath = environment.apiUrl + "cars/getcardetails"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath = environment.apiUrl + "cars/getcarsbybrandid?brandId="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath = environment.apiUrl + "cars/getcarsbycolorid?colorId="+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarByBrandAndColor(brandId:Number,colorId:Number):Observable<ListResponseModel<Car>>{
    let newPath = environment.apiUrl +`cars/getbybrandandcolor?brandId=${brandId}&colorid=${colorId}`;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarDetailsByCarId(carId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath =environment.apiUrl + "cars/getcardetail?carId="+carId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  add(car:Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(environment.apiUrl + "cars/add",car);
  }
  getById(carId : number):Observable<ItemResponseModel<Car>>{
    let newPath = environment.apiUrl + "cars/getbyid?id=" + carId;
    return this.httpClient.get<ItemResponseModel<Car>>(newPath);
  }
  update(car:Car):Observable<ListResponseModel<Car>>{
    let newPath = environment.apiUrl + "cars/update";
    return this.httpClient.post<ListResponseModel<Car>>(newPath,car);
  }
  delete(car:Car):Observable<ItemResponseModel<Car>>{
    let newPath = environment.apiUrl + "cars/delete";
    return this.httpClient.post<ItemResponseModel<Car>>(newPath,car);
  }

  
}