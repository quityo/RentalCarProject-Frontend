import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OperationClaim } from '../models/operationClaim';
import { ListResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class OperationClaimService {

  constructor(private httpClient: HttpClient) { }
  getRoles():Observable<ListResponseModel<OperationClaim>>{
    let newPath = environment.apiUrl + "operationClaims/getall"
    return this.httpClient.get<ListResponseModel<OperationClaim>>(newPath);
  }
}
