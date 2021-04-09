import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer';
import { ListResponseModel, ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = environment.apiUrl +'customers/';

  constructor(private httpClient : HttpClient) { }

  getCustomers():Observable<ListResponseModel<Customer>>{
    let newPath = environment.apiUrl + 'customers/getall';
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }
  getCustomerById(customerId : number) : Observable<ListResponseModel<Customer>>{
    let newPath = environment.apiUrl + 'customers/getbyid?customerid=' + customerId;
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }
  add(customer : Customer):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "add",customer)
  }
}