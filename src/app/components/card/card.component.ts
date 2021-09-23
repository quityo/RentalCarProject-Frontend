import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { LocalStorageService } from 'src/app/services/localStorage.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  cardAddForm: FormGroup;
  customers: Customer[];
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toastrService: ToastrService,
    private localStorageService: LocalStorageService,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.getCustomers();

    this.createCardAddForm();
  }

  createCardAddForm() {
    this.cardAddForm = this.formBuilder.group({
      customerId: [''],
      nameOnTheCard: ['', Validators.required],
      cardNumber: ['', Validators.required],
      expirationDate: ['', Validators.required],
      cardCvv: ['', Validators.required],
      moneyInTheCard: ['', Validators.required],
    });
  }

  addCard() {
    let creditCardModel = Object.assign({}, this.cardAddForm.value);
    creditCardModel.customerId = Number(
      this.localStorageService.getIdDecodeToken()
    );
    this.userService.addCard(creditCardModel).subscribe((response) => {
      this.toastrService.success(response.message, 'Success');
      window.location.reload();
    });
  }
  getCustomers() {
    this.customerService.getCustomers().subscribe((response) => {
      this.customers = response.data;
    });
  }
}
