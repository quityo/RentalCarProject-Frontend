import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListResponseModel, ResponseModel } from '../models/responseModel';
import { UserImage } from '../models/userImage';

@Injectable({
  providedIn: 'root'
})
export class UserImageService {

  apiUrl = environment.apiUrl;
  path : string = environment.apiUrl + 'userimages/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient:HttpClient) { }

  getUserImages(userId:number):Observable<ListResponseModel<UserImage>>{
    let newPath = environment.apiUrl + "userimages/getimagesbyuserid?userId=" + userId
    return this.httpClient.get<ListResponseModel<UserImage>>(newPath)
  }

  getUserImagesByUserId(userId:number):Observable<ListResponseModel<UserImage>>{
    let newPath = environment.apiUrl + "userimages/getimagesbyuserid?userId=" + userId
    return this.httpClient.get<ListResponseModel<UserImage>>(newPath)
  }
  getAllImages():Observable<ListResponseModel<UserImage>> {
    let newPath = this.path + "getall";
    return this.httpClient.get<ListResponseModel<UserImage>>(newPath);
  }
  add(userImage:FormData):Observable<ListResponseModel<UserImage>> {
    let newPath = this.path + "add";
    return this.httpClient.post<ListResponseModel<UserImage>>(newPath, userImage );
  }

  updateImage(userImage:UserImage){
    let newPath = this.path + "update";
    return this.httpClient.post<ResponseModel>(newPath, userImage);
  }

  delete(userImage:UserImage){
    let newPath = this.path + "delete";
    return this.httpClient.post<ResponseModel>(newPath, userImage);
  }
  }