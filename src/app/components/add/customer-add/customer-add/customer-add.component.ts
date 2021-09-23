import { UserService } from './../../../../services/user.service';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  users:User[];
customerAddForm : FormGroup;
customers :Customer[];
  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private toastrService: ToastrService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllUsers();
    this.createCustomerAddForm();
  }
   
  createCustomerAddForm(){
    this.customerAddForm = this.formBuilder.group({
      userId:["",Validators.required],
      companyName : ["",Validators.required],
      customerFindex : [""]
    })
  }
  add(){
    if(this.customerAddForm.valid){
      let customerModel = Object.assign({},this.customerAddForm.value)
      this.customerService.add(customerModel).subscribe(response => {
        this.toastrService.success(response.message,"Successful")
        this.router.navigate(['card'])
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
  
    getAllUsers(){
    this.userService.getAllUsers().subscribe(response=>{
      this.users = response.data;
    })
  }
}

