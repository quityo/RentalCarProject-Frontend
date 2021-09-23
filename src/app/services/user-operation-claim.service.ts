import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ItemResponseModel, ListResponseModel, ResponseModel } from '../models/responseModel';
import { UserOperationClaim } from '../models/userOperationClaim';

@Injectable({
  providedIn: 'root'
})
export class UserOperationClaimService {

  constructor(private httpClient: HttpClient) { }
 
 
  update(userOperationClaim:UserOperationClaim):Observable<ListResponseModel<UserOperationClaim>>{
    let newPath = environment.apiUrl + "userOperationClaims/update";
    return this.httpClient.post<ListResponseModel<UserOperationClaim>>(newPath,userOperationClaim);
  }
  getDetails():Observable<ListResponseModel<UserOperationClaim>>{
    let newPath = environment.apiUrl + "userOperationClaims/getoperationdetails";
    return this.httpClient.get<ListResponseModel<UserOperationClaim>>(newPath);
  }

  getDetailsById(id:number):Observable<ListResponseModel<UserOperationClaim>>{
    let newPath =environment.apiUrl + "userOperationClaims/getoperationdetail?id="+id;
    return this.httpClient.get<ListResponseModel<UserOperationClaim>>(newPath);
  }
 
   getById(id : number):Observable<ItemResponseModel<UserOperationClaim>>{
    let newPath = environment.apiUrl + "userOperationClaims/getbyid?id=" + id;
    return this.httpClient.get<ItemResponseModel<UserOperationClaim>>(newPath);
  }
  delete(userOperationClaim:UserOperationClaim):Observable<ItemResponseModel<UserOperationClaim>>{
    let newPath = environment.apiUrl + "userOperationClaims/delete";
    return this.httpClient.post<ItemResponseModel<UserOperationClaim>>(newPath,userOperationClaim);

  }

}
