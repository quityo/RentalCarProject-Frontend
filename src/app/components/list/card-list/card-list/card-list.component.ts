import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';
import { User } from 'src/app/models/user';
import { CardService } from 'src/app/services/card.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  cards : Card[]= []
  user :User[]= [];
    constructor(private cardService : CardService,
      private userService: UserService) { }
  
    ngOnInit(): void {
    this.getCards();
    this.getUsers();
    }
    getCards(){
      this.cardService.getCards().subscribe((response) =>{
        this.cards  = response.data
      })
    }
    getUsers(){
      this.userService.getUsers().subscribe((response) =>{
        this.user  = response.data
      })
    }
  }
  