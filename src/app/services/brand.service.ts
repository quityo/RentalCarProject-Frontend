import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Brand } from '../models/brand';
import { ListResponseModel, ResponseModel } from '../models/responseModel';



@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = "https://localhost:44315/api/brands/getall"

  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>>{
    return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl)
  }
  add(brand : Brand):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(environment.apiUrl + "add",brand)
  }
}