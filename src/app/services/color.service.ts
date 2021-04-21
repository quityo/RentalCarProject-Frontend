import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Color } from '../models/color';
import { ItemResponseModel, ListResponseModel, ResponseModel } from '../models/responseModel';
@Injectable({
  providedIn: 'root'
})
export class ColorService {
 

  constructor(private httpClient : HttpClient) { }

  getColors():Observable<ListResponseModel<Color>>{
    let newPath = environment.apiUrl + "colors/getall"
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }
  add(color : Color):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(environment.apiUrl + "colors/add",color)
  }
  
  getbyId(colorId:number):Observable<ItemResponseModel<Color>>{
    let newPath = environment.apiUrl + "colors/getbyid?id=" + colorId;
    return this.httpClient.get<ItemResponseModel<Color>>(newPath);
  }
  update(color:Color) : Observable<ListResponseModel<Color>>{
    let newPath = environment.apiUrl + "colors/update";
    return this.httpClient.post<ListResponseModel<Color>>(newPath,color);
  }
  delete(color:Color) : Observable<ListResponseModel<Color>>{
    let newPath = environment.apiUrl + "colors/delete";
    return this.httpClient.post<ListResponseModel<Color>>(newPath,color);
  }
}