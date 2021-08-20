import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Card } from '../models/card';
import { ListResponseModel, ResponseModel, SingleResponseModel } from '../models/responseModel';
import { User,} from '../models/user';
@Injectable({
  providedIn: 'root'
})

export class UserService { 

  constructor(private httpClient : HttpClient) { }

  
  getUsers():Observable<ListResponseModel<User>>{
    let newPath = environment.apiUrl + "users/getall"
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }
  getByEmail(email:string):Observable<SingleResponseModel<User>>{
    let newPath= environment.apiUrl + 'users/email?email='+email
    return this.httpClient.get<SingleResponseModel<User>>(newPath)
  }
  
 getUserDetails():Observable<ListResponseModel<User>>{
    let newPath =environment.apiUrl + "users/getuserdetails";
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }  
  getUserDetail(userId:number):Observable<ListResponseModel<User>>{
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
    console.log(user)
    return this.httpClient.post<ResponseModel>(environment.apiUrl + 'users/updateprofile', {
      user:{
        'id': user.userId,
        'firstName': user.firstName,
        'lastName': user.lastName,
        'email': user.email,
        'status':user.status
      },
      password:user.password,
    });
  }

 
  getAllCard(customerId : number):Observable<ListResponseModel<Card>>{
    let newPath = environment.apiUrl + "cards/getallcardbycustomerid?customerId=" + customerId;
    return this.httpClient.get<ListResponseModel<Card>>(newPath);
  }
  deleteCard(cardId : number):Observable<ResponseModel>{
    let newPath =environment.apiUrl + "cards/deletebycardid";
    return this.httpClient.post<ResponseModel>(newPath,cardId);
  }
  addCard(card:Card):Observable<ResponseModel> {
    let newPath = environment.apiUrl +"cards/add";
    return this.httpClient.post<ResponseModel>(newPath, card);
  }
 
}