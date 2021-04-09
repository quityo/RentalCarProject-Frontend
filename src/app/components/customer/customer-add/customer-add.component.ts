import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  brandAddForm : FormGroup;
  customerAddForm: FormGroup;

  constructor(private formBuilder : FormBuilder,
    private customerService : CustomerService,
    private toastrService : ToastrService
    ) { }

  ngOnInit(): void {
    this.createCustomerAddForm();
  }
  createCustomerAddForm(){
    this.customerAddForm = this.formBuilder.group({
      companyName : ["",Validators.required]
    })
  }
  add(){
    if(this.customerAddForm.valid){
      let companyName = Object.assign({},this.customerAddForm.value)
      this.customerService.add(companyName).subscribe(response => {
        this.toastrService.success(response.message,"Başarılı")
      },responseError => {
        if(responseError.error.Errors.length > 0){
          for(let i=0;i<responseError.error.Errors.length;i++){
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama Hatası");
          }
        }
      });
    }else{
      this.toastrService.error("Formunuz Eksik","Dikkat");
    }
  }

}
