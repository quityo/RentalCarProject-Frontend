import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { LoginModel, RegisterModel } from '../models/authModel';
import { SingleResponseModel } from '../models/responseModel';
import { TokenDetail, TokenModel } from '../models/tokenModel';
import { LocalStorageService } from './localStorage.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  tokenDetail = new TokenDetail()
  claims: String[];

  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService,
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
    this.tokenDetail.userName = data['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']
    this.tokenDetail.claims = data['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
  }

  isAuthenticated() {
    if (this.localStorageService.getLocalStorage('token')) {
      return true;
    } else {
      return false;
    }
  }

  isAdmin(){
    if(this.localStorageService.getClaimsDecodeToken() === "admin")
    {
      return true;
    }
    else{
      return false;
    }
  }
}