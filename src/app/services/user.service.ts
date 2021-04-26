import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Card } from '../models/card';
import { ListResponseModel, ResponseModel } from '../models/responseModel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})export class UserService {

  constructor(private httpClient : HttpClient) { }

  

  getByEmail(email:string):Observable<User>{
    return this.httpClient.get<User>(environment.apiUrl + 'users/email?email='+email);
  }
  getUsers():Observable<ListResponseModel<User>>{
    return this.httpClient.get<ListResponseModel<User>>(environment.apiUrl + 'users/getall')
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