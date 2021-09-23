import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { LocalStorageService } from 'src/app/services/localStorage.service';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
  customer:Customer;
  customerUpdateForm:FormGroup;
  customers: Customer[]= [];
  filterText = "";

  constructor(private formBuilder:FormBuilder, private customerService:CustomerService,
    private activatedRoute : ActivatedRoute,
    private toastrService:ToastrService, private localStorageService:LocalStorageService) { }

  ngOnInit(): void {
    {
      this.getCustomerByEmail();
    this.createCustomerUpdateForm();
    }
  }
  createCustomerUpdateForm()
  {
    this.customerUpdateForm = this.formBuilder.group({
      companyName:[""],
      email:[""]
    });
  }
  updateCustomer()
  {
    let customerId = Number(this.localStorageService.getIdDecodeToken());
    let customerModel =  Object.assign({}, this.customerUpdateForm.value);

    this.customerService.customerDtoUpdate(customerModel,customerId).subscribe((response) => {
      this.toastrService.success(response.message, "Success");
      window.location.reload();
    });

  }
  getCustomerByEmail()
  {
    let email = this.localStorageService.getMailDecodeToken();
    this.customerService.getCustomerByEmail(email).subscribe(response => {
        this.customer = response.data;
    })            
  }
}
