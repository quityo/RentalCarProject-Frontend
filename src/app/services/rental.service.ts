import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarDetail } from '../models/car-detail';
import { Rental, RentalDetail } from '../models/rental';
import { ListResponseModel, ResponseModel, SingleResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  constructor(private httpClient : HttpClient) { }

  getRentals():Observable<ListResponseModel<Rental>>{
    let newPath = environment.apiUrl + 'rentals/getrentaldetails'
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }
  getRentalDetails():Observable<ListResponseModel<RentalDetail>>{
    let newPath = environment.apiUrl + 'rentals/getrentaldetails'
    return this.httpClient.get<ListResponseModel<RentalDetail>>(newPath);
  }
  
  getRentalByCarId(carId : number):Observable<ListResponseModel<Rental>>{
    let newPath = environment.apiUrl + 'rentals/getrentaldetailbycarId?carId=' + carId;
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }
  payRental(rental:Rental, amount:number){
    let newPath = environment.apiUrl + 'rentals/add';
    return this.httpClient.post<ResponseModel>(newPath,{payment:{amount:amount},rental:{rental}})
  }
  addRental(rental:Rental){
    let newPath = environment.apiUrl + "rentals/add"
    this.httpClient.post(newPath,rental).subscribe()
  }
  isCarAvailable(carId:number):Observable<boolean> {
    let newPath = environment.apiUrl + "rentals/iscaravailable?carId=" + carId;
    return this.httpClient.get<boolean>(newPath);
  }

  carIsReturned(carId:number):Observable<SingleResponseModel<Rental>> {
    let newPath = environment.apiUrl+ "rentals/carisreturned?carId=" + carId;
    return this.httpClient.get<SingleResponseModel<Rental>>(newPath);
  }
  checkFindeks(carId:number, customerId:number):Observable<ResponseModel>
  {
    let newPath = environment.apiUrl + "/rentals/checkfindeks?carId=" + carId + "&customerId=" + customerId;
    return this.httpClient.get<ResponseModel>(newPath);
  }

}