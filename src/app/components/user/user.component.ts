import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User,  } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 

  users: User[]= [];
  imageBasePath  = environment.imageUrl;
  filterText = "";
  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute, ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe((params) => {
      if(params["userId"]){
        this.getUserDetail(params["userId"]);
      }
      else{
        this.getUsers();
      }
    });
    
        
  }
  getUserDetail(userId: number){
    this.userService.getUserDetail(userId)
      .subscribe((response) => {
        this.users = response.data;
      });
  }

 /*  getRentals(rentalId: number) {
    this.rentalService.getRentals(rentalId).subscribe(response => {
      this.rentals = response.data;
      
    });
  } */
  getUsers(){
    this.userService.getUsers().subscribe(response=>{
      this.users = response.data
    })
  }
  getUserImage(user:User){

    if(user.imagePath){
      return user.imagePath
    }
    else{
      return 'default.jpg'
    }
  }
  
}