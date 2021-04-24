import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  addCreditCardForm:FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private userService : UserService,
    private toastrService : ToastrService,
    private localStorageService : LocalStorageService
  ) { }

  ngOnInit(): void {
    this.createUserUpdateForm();
  }
  createUserUpdateForm()
  {
    this.addCreditCardForm = this.formBuilder.group({
     
      nameOnTheCard:["", Validators.required],
      cardNumber:["", Validators.required],
      expirationDate:["", Validators.required],
      cardCvv:["", Validators.required]
    });
  }

  addCreditCard()
  {
    let creditCardModel =  Object.assign({}, this.addCreditCardForm.value);
   
    this.userService.addCard(creditCardModel).subscribe((response) => {
      this.toastrService.success(response.message, "Success");
      window.location.reload();
    });

  }

}