import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Card } from '../models/card';
import { ItemResponseModel, ListResponseModel, ResponseModel } from '../models/responseModel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})export class UserService {

  constructor(private httpClient : HttpClient) { }

  

  getById(userId:number):Observable<ItemResponseModel<User>>{
    let newPath = environment.apiUrl + "getbyid?id="+userId;
    return this.httpClient.get<ItemResponseModel<User>>(newPath);
  }
  updateInfos(user:User):Observable<ResponseModel>{
    let newPath = environment.apiUrl+"updateinfos";
    return this.httpClient.put<ResponseModel>(newPath,user);
  }
  getUserByMail(mail:string):Observable<ItemResponseModel<User>> {
    let newPath = environment.apiUrl + "getuserbymail?mail=" + mail;
    return this.httpClient.get<ItemResponseModel<User>>(newPath);
  }
  userDtoUpdate(user:User, userId:number):Observable<ResponseModel> {
    let newPath = environment.apiUrl + "userdtoupdate?userId=" +userId;
    return this.httpClient.post<ResponseModel>(newPath, user);
  }
  getAllCard(customerId : number):Observable<ListResponseModel<Card>>{
    let newPath = environment.apiUrl + "/cards/getallcardbycustomerid?customerId=" + customerId;
    return this.httpClient.get<ListResponseModel<Card>>(newPath);
  }
  deleteCard(cardId : number):Observable<ResponseModel>{
    let newPath =environment.apiUrl + "/cards/deletebycardid";
    return this.httpClient.post<ResponseModel>(newPath,cardId);
  }
  addCard(card:Card):Observable<ResponseModel> {
    let newPath = environment.apiUrl +"/cards/add";
    return this.httpClient.post<ResponseModel>(newPath, card);
  }
}