import { Customer } from 'src/app/models/customer';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { CustomerService } from 'src/app/services/customer.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  customers: Customer[]=[];
  users:User[]=[];
  userAddForm:FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private userService: UserService,
    private customerService: CustomerService,
    private toastrService:ToastrService,
    private router:Router)
     { }

  ngOnInit(): void {
    this.createUserAddForm();
    this.getRoles();
    this.getCustomers()
  }


  getCustomers()
  {
    this.customerService.getCustomers().subscribe(response =>{
      this.customers = response.data;
    });
  }
  getRoles()
  {
    this.userService.getRoles().subscribe(response =>{
      this.users = response.data;
    });
  }
  createUserAddForm()
  {
    this.userAddForm = this.formBuilder.group({
      userId:["",Validators.required],
      name:["",Validators.required]
    });
  }
  addRole(){
    if(this.userAddForm.valid){
      let userModel = Object.assign({},this.userAddForm.value)
      this.userService.addRole(userModel).subscribe(response => {
        this.toastrService.success(response.message,"Successful")
        
        this.router.navigate(['customerlist'])
      },responseError => {
        if(responseError.error.Errors.length > 0){
          for(let i =0; i<responseError.error.Errors.length; i++){
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Validation error");
          } }
        });
      }else{
        this.toastrService.error("Form Is Missing");
      }
    }

}