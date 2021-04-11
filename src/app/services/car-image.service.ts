import { HttpClient } from '@angular/common/http';
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

  constructor(private httpClient:HttpClient) { }

  getCarImages(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath = environment.apiUrl + "carimages/getimagesbycarid?carId=" + carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }

  addImage(formData: FormData): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.path + 'add',formData);
  }

  updateImage(formData: FormData): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.path + 'update', formData);
  }

  deleteImage(imageModel: CarImage): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.path + 'delete',
      imageModel
    );
  }}