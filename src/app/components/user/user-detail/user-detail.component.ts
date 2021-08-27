import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/models/customer';
import { Rental } from 'src/app/models/rental';
import { User } from 'src/app/models/user';
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
  customer: Customer[] = [];

  

  constructor(
    private userService:UserService,
    private userImageService : UserImageService,
    private activatedRoute : ActivatedRoute,
    private toastrService : ToastrService) { }

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params=>{
      if(params["userId"]){
        this.getUserDetails(params["userId"]);
        this.getUserImages(params["userId"]);
      }else{
        this.getUsers();
      }
    })
  }
  getUsers(){
    this.userService.getUsers()
      .subscribe((response) => {
        this.users = response.data;
      });
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
getUserImages(userId:number){
  this.userImageService.getUserImages(userId).subscribe((response)=>{
    this.userImages = response.data;
  })
}
getButtonClass(image:UserImage){
  if(image==this.userImages[0]){
    return "active"
  } else {
    return ""
  }
}

}