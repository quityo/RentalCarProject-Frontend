import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Card } from '../models/card';
import { ListResponseModel, ResponseModel, SingleResponseModel } from '../models/responseModel';
import { User,} from '../models/user';
import { UserForUpdate } from '../models/UserForUpdate';
import { UserOperationClaim } from '../models/userOperationClaim';
@Injectable({
  providedIn: 'root'
})

export class UserService { 

  constructor(private httpClient : HttpClient) { }
  getAllUsers():Observable<ListResponseModel<User>>{
    let newPath = environment.apiUrl + "users/getall"
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }
  
  getUsers():Observable<ListResponseModel<User>>{
    let newPath = environment.apiUrl + "users/getuserdetails"
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }
  getByEmail(email:string):Observable<SingleResponseModel<User>>{
    let newPath= environment.apiUrl + 'users/email?email='+email
    return this.httpClient.get<SingleResponseModel<User>>(newPath)
  }
  
 getUserDetail():Observable<ListResponseModel<User>>{
    let newPath =environment.apiUrl + "users/getuserdetails";
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }  
  getUserDetails(userId:number):Observable<ListResponseModel<User>>{
    let newPath =environment.apiUrl + "users/getuserdetail?userId=" + userId;
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  } 
  getUserById(userId:number):Observable<ListResponseModel<User>>{
    let newPath =environment.apiUrl + "users/getbyid?userId=" + userId;
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }
  update(user:User):Observable<SingleResponseModel<User>>{
    let newPath = environment.apiUrl + "users/update"
    return this.httpClient.post<SingleResponseModel<User>>(newPath,user)
  }
  profileUpdate(user:User):Observable<ResponseModel>{
    let newPath = environment.apiUrl + "users/updateprofile"
      return this.httpClient.put<ResponseModel>(newPath,user);
  }
 
 
  deleteCard(cardId : number):Observable<ResponseModel>{
    let newPath =environment.apiUrl + "cards/deletebycardid";
    return this.httpClient.post<ResponseModel>(newPath,cardId);
  }
  addCard(card : Card):Observable<ResponseModel>{
    let newPath = environment.apiUrl + "cards/add";
    return this.httpClient.post<ResponseModel>(newPath,card);
  }

  userDtoUpdate(user:UserForUpdate, userId:number):Observable<ResponseModel> {
    let newPath = environment.apiUrl + "users/userdtoupdate?userId=" +userId;
    return this.httpClient.post<ResponseModel>(newPath, user);
  }
  getAllCard(customerId:number):Observable<ListResponseModel<Card>>
  {
    let newPath = environment.apiUrl + "creditcards/getallcardbycustomerid?customerId=" + customerId;
    return this.httpClient.get<ListResponseModel<Card>>(newPath);
  }
 
}