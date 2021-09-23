
import { Customer } from 'src/app/models/customer';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { CustomerService } from 'src/app/services/customer.service';
import { UserService } from 'src/app/services/user.service';
import { UserOperationClaimService } from 'src/app/services/user-operation-claim.service';
import { UserOperationClaim } from 'src/app/models/userOperationClaim';
import { OperationClaimService } from 'src/app/services/operation-claim.service';
import { OperationClaim } from 'src/app/models/operationClaim';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  customers: Customer[]=[];
  users:User[]=[];
  operationClaims : OperationClaim[]=[];
  userOperationClaims : UserOperationClaim[]=[];
  userOperationClaimUpdateForm:FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private userService: UserService,
    private userOperationClaimService: UserOperationClaimService,
    private customerService: CustomerService,
    private toastrService:ToastrService,
    private router:Router,
    private operationClaimService: OperationClaimService,)
     { }

  ngOnInit(): void {
    this.createUserOperationClaimUpdateForm();
    this.getRoles();
    this.getUsers()
  }


  getUsers()
  {
    this.userService.getUsers().subscribe(response =>{
      this.users = response.data;
    });
  }
  getRoles()
  {
    this.operationClaimService.getRoles().subscribe(response =>{
      this.operationClaims = response.data;
    });
  }
  createUserOperationClaimUpdateForm()
  {
    this.userOperationClaimUpdateForm = this.formBuilder.group({
      
      userOperationClaimId:[""], 
    operationClaimId:["",Validators.required]
    });
  }
  updateRole(){
    if(this.userOperationClaimUpdateForm.valid){
      let userModel = Object.assign({},this.userOperationClaimUpdateForm.value)
      this.userOperationClaimService.update(userModel).subscribe(response => {
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