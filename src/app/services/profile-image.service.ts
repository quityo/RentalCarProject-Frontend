import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProfileImage } from '../models/profileImage';
import { ListResponseModel, ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ProfileImageService {
  path : string = environment.apiUrl + 'profileimages/';
  apiUrl = environment.apiUrl;

  constructor(private httpClient:HttpClient) { }

  getProfileImages(userId:number):Observable<ListResponseModel<ProfileImage>>{
    let newPath = environment.apiUrl + "profileimages/getimagesbyuserid?userId=" + userId
    return this.httpClient.get<ListResponseModel<ProfileImage>>(newPath)
  }
  getAllImages():Observable<ListResponseModel<ProfileImage>> {
    let newPath = this.path + "getall";
    return this.httpClient.get<ListResponseModel<ProfileImage>>(newPath);
  }
  add(profileImage:FormData):Observable<ListResponseModel<ProfileImage>> {
    let newPath = this.path + "add";
    return this.httpClient.post<ListResponseModel<ProfileImage>>(newPath, profileImage );
  }
  updateImage(profileImage:ProfileImage){
    let newPath = this.path + "update";
    return this.httpClient.post<ResponseModel>(newPath, profileImage);
  }

  delete(profileImage:ProfileImage){
    let newPath = this.path + "delete";
    return this.httpClient.post<ResponseModel>(newPath, profileImage);
  }
}
