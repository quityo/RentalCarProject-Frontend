import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../models/car';
import { CarDetail } from '../models/car-detail';
import { CarImage } from '../models/carImage';
import { ItemResponseModel, ListResponseModel } from '../models/responseModel';
@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  constructor(private httpClient:HttpClient) { }

  getCarDetail(carId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = environment.apiUrl + 'cars/getcardetail?carId=' + carId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarDetails(carId:number):Observable<ItemResponseModel<Car>>{
    let newPath = environment.apiUrl + "cars/getcardetail?carId="+carId
    return this.httpClient.get<ItemResponseModel<Car>>(newPath)
  }
  getCarImages(carId:number):Observable<ListResponseModel<CarImage>>{
      let newPath = environment.apiUrl + "cars/getcardetail?carId="+carId
      return this.httpClient.get<ListResponseModel<CarImage>>(newPath)       
  }
}