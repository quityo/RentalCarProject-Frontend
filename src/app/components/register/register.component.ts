import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { StorageService } from 'src/app/services/storage.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private authService: AuthService,
    private toastrService: ToastrService,
    private storageService: StorageService,
    private formBuilder: FormBuilder,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm(){
    this.registerForm = this.formBuilder.group({
     
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }

  register(){
    if(this.registerForm.valid){
      let registerModel = Object.assign({},this.registerForm.value)

      this.authService.register(registerModel).subscribe(response=>{
        this.toastrService.success(response.message);
         
        this.authService.decodeToken(response.data.token)    
        this.storageService.set("token",response.data.token)
             
    this.router.navigate(['customers/add'])
    .then(() => {
      window.location.reload();
    });
      });
    }
    else{
        this.toastrService.error("Please fill in all fields on the form","Error");
    }
  }

}