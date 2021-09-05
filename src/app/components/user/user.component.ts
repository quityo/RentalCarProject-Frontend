import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User} from 'src/app/models/user';
import { UserImage } from 'src/app/models/userImage';
import { UserImageService } from 'src/app/services/user-image.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[]= [];
  userImages: UserImage[]= [];
  filterText = "";
  imageBasePath  = environment.imageUrl;


  baseUrl = environment.baseUrl;
  constructor(
    
    private userService:UserService,
    private userImageService : UserImageService,
    private activatedRoute: ActivatedRoute, ) { }

    ngOnInit(): void {this.activatedRoute.params.subscribe(params=>{
      if(params["userId"]){
       
        this.getUserImagesByUserId(params["userId"]);
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
getUserDetail() {
  this.userService.getUserDetail().subscribe((response) => {
    this.users = response.data;
  });

}
getUserImagesByUserId(userId:number){
  this.userImageService.getUserImagesByUserId(userId).subscribe((response)=>{
    this.userImages = response.data;
  })
}
 /*  getRentals(rentalId: number) {
    this.rentalService.getRentals(rentalId).subscribe(response => {
      this.rentals = response.data;
      
    });
  } */
}