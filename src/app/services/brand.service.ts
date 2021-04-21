import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Brand } from '../models/brand';
import { ItemResponseModel, ListResponseModel, ResponseModel } from '../models/responseModel';



@Injectable({
  providedIn: 'root'
})
export class BrandService {
  
  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>>{
    let newPath = environment.apiUrl + "brands/getall";
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }
  add(brand : Brand):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(environment.apiUrl + "brands/add",brand)
  }
  getById(brandId : number):Observable<ItemResponseModel<Brand>>{
    let newPath = environment.apiUrl + "brands/getbyid?id=" + brandId;
    return this.httpClient.get<ItemResponseModel<Brand>>(newPath);
  }
  update(brand : Brand) : Observable<ListResponseModel<Brand>>{
    let newPath = environment.apiUrl + "brands/update";
    return this.httpClient.post<ListResponseModel<Brand>>(newPath,brand);
  }
  delete(brand : Brand):Observable<ItemResponseModel<Brand>>{
    let newPath = environment.apiUrl + "brands/delete";
    return this.httpClient.post<ItemResponseModel<Brand>>(newPath,brand);

  }
}