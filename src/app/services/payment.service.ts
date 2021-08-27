import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Card } from '../models/card';
import { Payment } from '../models/payment';
import { ListResponseModel, ResponseModel, SingleResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  

  constructor(private httpClient:HttpClient) { }

  
  addPayment(payment:Payment):Observable<ResponseModel> {
    let newPath = environment.apiUrl + "/payments/add";
    return this.httpClient.post<ResponseModel>(newPath,payment);
  }

  getCreditCardById(cardId:number):Observable<SingleResponseModel<Card>> {
    let newPath = environment.apiUrl + "/cards/getbyid?cardId=" + cardId;
    return this.httpClient.get<SingleResponseModel<Card>>(newPath);
  }
}