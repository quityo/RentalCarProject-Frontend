import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, FormBuilder, Validators,} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Card } from 'src/app/models/card';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  cards : Card[] = [];

  constructor(private userService : UserService,
    private toastrService : ToastrService,
    private localStorageService : LocalStorageService) { }

  ngOnInit(): void {
    this.getAllCard();
  }
  getAllCard(){
    let customerId = this.localStorageService.getIdDecodeToken();
    this.userService.getAllCard(customerId).subscribe(response => {
      this.cards = response.data;
    })
  }
  deleteCard(cardId : number){
    console.log(cardId);
    this.userService.deleteCard(cardId).subscribe(response => {
      this.toastrService.success(response.message, "success");
      window.location.reload();
    }, responseError =>{
        this.toastrService.error(responseError.error.message, "error");
    });
  }

}