import { Component, OnInit } from '@angular/core';
import {  FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { Rental } from 'src/app/models/rental';
import { User } from 'src/app/models/user';
import { CustomerService } from 'src/app/services/customer.service';
import { UserImageService } from 'src/app/services/user-image.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';
import { UserImage } from 'c:/kamp-frontend/rentalcar/src/app/models/userImage';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  users: User[]= [];
  rental:Rental;
  userImages: UserImage[]= [];
  imageRoot  = environment.imageUrl;
  imageBasePath  = environment.imageUrl;
  baseUrl = environment.baseUrl;
  user:User;
  userUpdateForm:FormGroup;
  
  filterText = "";
  
  customers: Customer[] = [];

  

  constructor(
    private userService:UserService,
    private userImageService : UserImageService,
    private activatedRoute : ActivatedRoute,
    private customerService: CustomerService) { }

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params=>{
      if(params["userId"]){
        this.getUserDetails(params["userId"]);
        this.getUserImagesByUserId(params["userId"]);
      }else{
        this.getCustomers();
      }
    })
  }
 
/*  getRentals(rentalId: number) {
this.rentalService.getRentals(rentalId).subscribe(response => {
  this.rentals = response.data;
  
});
} */
getUserDetails(userId: number) {
  this.userService.getUserDetails(userId).subscribe((response) => {
    this.users = response.data;
  });

}
getUserImagesByUserId(userId:number){
  this.userImageService.getUserImagesByUserId(userId).subscribe((response)=>{
    this.userImages = response.data;
    
  })
}
getButtonClass(image:UserImage){
  if(image==this.userImages[0]){
    return "active"
  }else {
    return ""
  }
}
getCustomers()
{
  this.customerService.getCustomers().subscribe((response) => {
    this.customers = response.data;
  });

}
}