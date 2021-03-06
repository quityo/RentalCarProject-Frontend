import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { LocalStorageService } from 'src/app/services/localStorage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:User;
  userUpdateForm:FormGroup;

  constructor(private formBuilder:FormBuilder, private userService:UserService,
    private toastrService:ToastrService, private localStorageService:LocalStorageService) { }

  ngOnInit(): void {
    this.getByEmail();
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

  getByEmail()
  {
    let mail = this.localStorageService.getMailDecodeToken();
    this.userService.getByEmail(mail).subscribe(response => {
        this.user = response.data;
    })            
  }
}