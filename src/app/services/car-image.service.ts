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

  

  constructor(private httpClient:HttpClient) { }

  getCarImages(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath = environment.apiUrl + "carimages/getimagesbycarid?carId=" + carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }

  add(image: File): Observable<ResponseModel> {
    var formData: FormData = new FormData();
    formData.append('carId', '3');
    formData.append('file', image);
    console.log(image);
    return this.httpClient.post<ResponseModel>(
      environment.apiUrl + 'carimages/add',
      formData
    );
  }}