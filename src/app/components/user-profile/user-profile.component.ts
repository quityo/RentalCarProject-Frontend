import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { CustomerService } from 'src/app/services/customer.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user:User;
  userUpdateForm:FormGroup;

 

  constructor(
    private formBuilder:FormBuilder,
    private customerService : CustomerService,
    private toastrService : ToastrService,
    private localStorageService : LocalStorageService,
    private userService : UserService,
    private router : Router,
    private authService : AuthService
  ) { }

  ngOnInit(): void {
  
    this.getUserByMail();
    this.createUserUpdateForm();
  }
 

  
  createUserUpdateForm()
  {
    this.userUpdateForm = this.formBuilder.group({
      firstName:[null],
      lastName:[null],
      email:[null],
      password:[null]
    });
  }

  updateUser()
  {
    let userId = Number(this.localStorageService.getIdDecodeToken());
    let userModel =  Object.assign({}, this.userUpdateForm.value);

    this.userService.userDtoUpdate(userModel,userId).subscribe((response) => {
      this.toastrService.success(response.message, "Success");
    });

    if(this.user.email !== this.userUpdateForm.controls["email"].value)
    {
      this.localStorageService.removeLocalStorage("token");
      window.location.reload();
    }
  }

  getUserByMail()
  {
    let mail = this.localStorageService.getMailDecodeToken();
    this.userService.getUserByMail(mail).subscribe(response => {
        this.user = response.data;
    })            
  }
}