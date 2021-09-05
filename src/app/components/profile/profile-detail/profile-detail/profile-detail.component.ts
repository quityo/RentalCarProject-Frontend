import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/models/customer';
import { Rental } from 'src/app/models/rental';
import { User } from 'src/app/models/user';
import { UserImage } from 'src/app/models/userImage';
import { UserImageService } from 'src/app/services/user-image.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {

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