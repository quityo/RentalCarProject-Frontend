import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  control : any;
  userName : string;
brand : Brand[]=[]
  constructor(
    private router : Router,    
    private authService : AuthService,
    private StorageService : StorageService
   ) { }

  ngOnInit(): void {
    this.isAuth();
    
  }
  roleIfExist(claim: string) {
    return this.authService.tokenDetail?.claims?.indexOf(claim) > -1;
  }
  isAuth() {
    this.userName = this.authService.tokenDetail.username
    return this.authService.isAuthenticated();
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
  
  
}