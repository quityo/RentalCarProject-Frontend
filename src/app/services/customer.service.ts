import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Customer, } from '../models/customer';
import { CustomerForUpdate } from '../models/customerForUpdate';
import {  ItemResponseModel, ListResponseModel, ResponseModel, SingleResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})


  export class CustomerService {

   

    constructor(private httpClient : HttpClient) { }
  
    getCustomers():Observable<ListResponseModel<Customer>>{
      let newPath = environment.apiUrl + 'customers/getcustomerdetail';
      return this.httpClient.get<ListResponseModel<Customer>>(newPath);
    }
    getCustomerById(customerId : number) : Observable<ListResponseModel<Customer>>{
      let newPath = environment.apiUrl +'customers/getcustomerdetailbyid?customerId=' + customerId;
      return this.httpClient.get<ListResponseModel<Customer>>(newPath);
    }
    getCustomerByEmail(email:string):Observable<ItemResponseModel<Customer>>{
      let newPath=environment.apiUrl +"getcustomerbyemail?email="+email;
      return this.httpClient.get<ItemResponseModel<Customer>>(newPath);
    }
    update(customer:Customer):Observable<SingleResponseModel<Customer>>{
      let newPath = environment.apiUrl + "customers/update"
      return this.httpClient.post<SingleResponseModel<Customer>>(newPath,customer)
    }
  
  add(customer:Customer):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(environment.apiUrl + "customers/add",customer)
  }
  customerDtoUpdate(customer:CustomerForUpdate, customerId:number):Observable<ResponseModel> {
    let newPath = environment.apiUrl + "customers/customerdtoupdate?customerId=" +customerId;
    return this.httpClient.post<ResponseModel>(newPath, customer);
  }
  }
  