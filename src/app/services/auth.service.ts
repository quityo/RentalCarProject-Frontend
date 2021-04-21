import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {  SingleResponseModel } from '../models/responseModel';
import { TokenDetail, TokenModel } from '../models/tokenModel';
import { environment } from 'src/environments/environment';
import { LoginModel, RegisterModel } from '../models/auth';
import { JwtHelperService } from '@auth0/angular-jwt';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  tokenDetail = new TokenDetail()

  constructor(
    private httpClient: HttpClient,
    private storageService: StorageService) { }

  login(loginModel:LoginModel){
    let newPath = environment.apiUrl + "auth/login";
    return this.httpClient.post<SingleResponseModel<TokenModel>>(newPath, loginModel)
  }

  register(registerModel : RegisterModel){
    let newPath = environment.apiUrl + "auth/register";
    return this.httpClient.post<SingleResponseModel<TokenModel>>(newPath, registerModel)
  }

  logout(){
    this.storageService.remove("token")
    this.tokenDetail = new TokenDetail()
  }

  decodeToken(token:string){
    let helper = new JwtHelperService()    
    let data = helper.decodeToken(token)    
    this.tokenDetail.email = data.email
    this.tokenDetail.username = data['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']
    this.tokenDetail.claims = data['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
  }

  isAuthenticated(){
    let token = this.storageService.get("token")
    if( token ){
      this.decodeToken(token)
      return true;
    }
    return false;    
  }

}