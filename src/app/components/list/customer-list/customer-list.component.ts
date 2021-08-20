import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { User } from 'src/app/models/user';
import { CustomerService } from 'src/app/services/customer.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

customers : Customer[]= []
user :User[]= [];
  constructor(private customerService : CustomerService,
    private userService: UserService) { }

  ngOnInit(): void {
  this.getCustomers();
  this.getUsers();
  }
  getCustomers(){
    this.customerService.getCustomers().subscribe((response) =>{
      this.customers  = response.data
    })
  }
  getUsers(){
    this.userService.getUsers().subscribe((response) =>{
      this.user  = response.data
    })
  }
}
