import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getLocalStorage(key:string)
  {
    return localStorage.getItem(key);
  }

  setLocalStorage(key:string, value:string)
  {
    return localStorage.setItem(key,value);
  }

  removeLocalStorage(key:string)
  {
    return localStorage.removeItem(key);
  }

  getIdDecodeToken()
  {
    let token = this.getLocalStorage("token");
    let userId:number = Number(Object.values(jwtDecode(token))[0]);
    return userId;
  }
  
  getMailDecodeToken()
  {
    let token =this.getLocalStorage("token");
    let email:string = String(Object.values(jwtDecode(token))[1]);
    return email;
  }

  getUserNameDecodeToken()
  { 
    let token =this.getLocalStorage("token");
    let userName:string = String(Object.values(jwtDecode(token))[2]);
    return userName;
  }

  getClaimsDecodeToken()
  {
    let token =this.getLocalStorage("token");
    let claim:string = String(Object.values(jwtDecode(token))[3]);
    return claim;
  }
}