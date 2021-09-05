import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UserImage } from 'src/app/models/userImage';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/localStorage.service';
import { UserImageService } from 'src/app/services/user-image.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  userImages: UserImage[]= [];
  imageRoot  = environment.imageUrl;
  imageBasePath  = environment.imageUrl;
  baseUrl = environment.baseUrl;
  user:User;
  isVerified: boolean = false;
  userName:string
  Email:string;
  claim:string;
  userId:number;

  constructor(
    private userImageService : UserImageService,
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.IsUserVerified();
    if(this.isVerified){
    this.getUserName();
    this.getUserClaim();
    this.getUserId()
    }
  }

  IsUserVerified() {
    if (this.authService.isAuthenticated()) {
      this.isVerified = true;
    } else {
      this.isVerified = false;
    }
  }
  
  getUserImages(userId:number){
    this.userImageService.getUserImages(userId).subscribe((response)=>{
      this.userImages = response.data;
    })
  }
  getUserName() {
    this.userName = this.localStorageService.getUserNameDecodeToken();
  }

  getUserId() {
    this.userId = this.localStorageService.getIdDecodeToken();
  }
  getUserClaim() {
    this.claim = this.localStorageService.getClaimsDecodeToken();
  }
  
  logOut() {
    this.localStorageService.removeLocalStorage("token");
    this.toastrService.info("You Logged Out");
    this.ngOnInit();
  }
}