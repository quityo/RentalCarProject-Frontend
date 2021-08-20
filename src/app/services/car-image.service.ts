import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarImage } from '../models/carImage';
import { ListResponseModel, ResponseModel } from '../models/responseModel';
@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl = environment.apiUrl;
  path : string = environment.apiUrl + 'carimages/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient:HttpClient) { }

  getCarImages(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath = environment.apiUrl + "carimages/getimagesbycarid?carId=" + carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }

  getCarImagesByUserId(userId:number):Observable<ListResponseModel<CarImage>>{
    let newPath = environment.apiUrl + "carimages/getimagesbycarid?userId=" + userId
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }
  getAllImages():Observable<ListResponseModel<CarImage>> {
    let newPath = this.path + "getall";
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
  add(carImage:FormData):Observable<ListResponseModel<CarImage>> {
    let newPath = this.path + "add";
    return this.httpClient.post<ListResponseModel<CarImage>>(newPath, carImage );
  }

  updateImage(carImage:CarImage){
    let newPath = this.path + "update";
    return this.httpClient.post<ResponseModel>(newPath, carImage);
  }

  delete(carImage:CarImage){
    let newPath = this.path + "delete";
    return this.httpClient.post<ResponseModel>(newPath, carImage);
  }
  }
 


 

  

 