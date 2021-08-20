import { Component, OnInit } from '@angular/core';
import {  CustomerDetail,  } from 'src/app/models/customer';
import { User } from 'src/app/models/user';
import { CustomerService } from 'src/app/services/customer.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  
  
  user: User[];
  customers: CustomerDetail[] = [];

  constructor(
    private customerService : CustomerService,
    private userService : UserService,
    ) { }

  ngOnInit(): void {
    this.getCustomers();
    this.getUsers();
  }
  getCustomers(){
    this.customerService.getCustomers().subscribe(response=>{
      this.customers = response.data
    })
  }
  getUsers(){
    this.userService.getUsers().subscribe(response=>{
      this.user= response.data
    })
  }

}