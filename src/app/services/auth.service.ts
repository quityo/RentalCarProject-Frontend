import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import { LoginModel } from '../models/loginModel';
import { PasswordChange } from '../models/passwordChange';
import { RegisterModel } from '../models/registerModel';
import { ItemResponseModel, SingleResponseModel } from '../models/responseModel';
import { TokenModel } from '../models/tokenModel';

import { LocalStorageService } from './local-storage.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  apiUrl = "https://localhost:44315/api/auth/";

  constructor(private httpClient : HttpClient,
    private localStorageService : LocalStorageService) { }

    login(loginModel : LoginModel):Observable<ItemResponseModel<TokenModel>>{
      return this.httpClient.post<ItemResponseModel<TokenModel>>(this.apiUrl+"login",loginModel);
    }
    register(registerModel:RegisterModel):Observable<ItemResponseModel<TokenModel>>{
      return this.httpClient.post<ItemResponseModel<TokenModel>>(this.apiUrl+"register",registerModel);
    }
  
  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }
  passwordChange(userPassword : PasswordChange) : Observable<ItemResponseModel<PasswordChange>>{
    let newPath = this.apiUrl + "changepassword";
    return this.httpClient.put<ItemResponseModel<PasswordChange>>(newPath,userPassword);
  }
}