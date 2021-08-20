import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarImage } from 'src/app/models/carImage';
import { Customer } from 'src/app/models/customer';
import { User } from 'src/app/models/user';
import { CarImageService } from 'src/app/services/car-image.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  users: User;
  carImages : CarImage[]=[];
  currentImage : CarImage;
  imageRoot  = environment.imageUrl;
  imageBasePath  = environment.imageUrl;


  baseUrl = environment.baseUrl;
  customer: Customer[] = [];
  

  constructor(
    private userService:UserService,
    private carImageService : CarImageService,
    private activatedRoute : ActivatedRoute,
    private toastrService : ToastrService) { }

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params=>{
      if(params["userId"]){
        this.getUserDetail(params["userId"]);
        this.getCarImagesByUserId(params["userId"]);
      }
    })
  }

/*  getRentals(rentalId: number) {
this.rentalService.getRentals(rentalId).subscribe(response => {
  this.rentals = response.data;
  
});
} */
getUserDetail(userId: number) {
  this.userService.getUserDetail(userId).subscribe((response) => {
    this.users = response.data[0];
  });

}
getCarImagesByUserId(userId:number){
  this.carImageService.getCarImagesByUserId(userId).subscribe((response)=>{
    this.carImages = response.data;
  })
}
getButtonClass(image:CarImage){
  if(image==this.carImages[0]){
    return "active"
  } else {
    return ""
  }
}

}