import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UserImage } from 'src/app/models/userImage';
import { UserImageService } from 'src/app/services/user-image.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
  styleUrls: ['./user-image.component.css']
})
export class UserImageComponent implements OnInit {

  @Input() user : User;
  
  imageRoot = environment.imageUrl
  userImage: UserImage[] = []
  
  userId: number
  imageFile : any
  baseUrl = environment.baseUrl;
  imageDataToUpload : any;
  imageToDelete : UserImage;
  imageToUpdate : UserImage;
  userImageAddForm : FormGroup;
  userImageUpdateForm : FormGroup;
  
  constructor(
    private activatedRoute: ActivatedRoute, 
    private userImageService:UserImageService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["userId"]){
        this.userId = params["userId"]
        this.getUserDetail(params["userId"])
      }
    })
  }

  getUserDetail(userId:number) {
    this.userImageService.getUserImages(userId).subscribe((response) => {
      this.userImage = response.data;
    });
  }

  delete(userImage:UserImage){
    this.userImageService.delete(userImage).subscribe(response=>{
      this.getUserDetail(this.userId)
      this.toastrService.success("Resim silindi","Başarılı")
    }, responseError => {
      this.toastrService.success("Resim silinemedi!","Hata")
    })
  }

  addImage(){
    const userImage: FormData = new FormData();
    userImage.append('UserId', this.userId.toString());
    userImage.append("imageFile", this.imageFile, this.imageFile.name);
    this.userImageService.add( userImage ).subscribe(response=>{
      this.toastrService.success(response.message)
      this.getUserDetail(this.userId)
    },responseError=>{
      this.toastrService.error(responseError.error.message)
    })
  }

  fileSelected(event:any) {
    this.imageFile = event.target.files[0]
    event.target.nextElementSibling.innerText=this.imageFile.name
  }

}
