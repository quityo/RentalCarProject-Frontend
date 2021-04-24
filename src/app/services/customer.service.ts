import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Customer, } from '../models/customer';
import {  ItemResponseModel, ListResponseModel, ResponseModel } from '../models/responseModel';

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
    customerUpdate(customer:Customer):Observable<ResponseModel>{
      let newPath=environment.apiUrl +"customers/updatecustomer";
      return this.httpClient.put<ResponseModel>(newPath,customer);
  }
  }