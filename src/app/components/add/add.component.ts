import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { User } from 'src/app/models/user';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  brands : Brand[] = []
  currentBrand : Brand;
  filterBrandText ="";
  colors : Color[] = [];
  currentColor : Color;
  filterColorText : "";
  cars : Car[] = [];
  
  currentCar : Car;
  filterText : "";

  users : User;
  currentUser: User;

  constructor(private brandService : BrandService,
    private colorService : ColorService,
    private carService : CarService,
    private userService : UserService,
    ) { }

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
    this.getCars();
    this.getUsers();
  }
  
  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data
    })
  }
  setCurrentBrand(brand:Brand){
    this.currentBrand = brand;
  }

  getCurrentBrandClass(brand:Brand){
    if(brand == this.currentBrand){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }
  getAllBrandClass(){
    if(!this.currentBrand){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }

  }
  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors = response.data
    })
  }
  setCurrentColor(color : Color){
    this.currentColor = color;
  }
  getCurrentColorClass(color:Color){
    if(color == this.currentColor){
      return "list-group-item active"
    }
    else{
      return "list-group-item "
    }
  }
  getAllColorClass(){
    if(!this.currentColor){
      return "list-group-item actice"
    }
    else{
      return "list-group-item"
    }
  }
  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars = response.data
    })
  }
  setCurrentCar(car : Car){
    this.currentCar = car;
  }
  getCurrentCarClass(car:Car){
    if(car == this.currentCar){
      return "list-group-item active"
    }
    else{
      return "list-group-item "
    }
  }
  getAllCarClass(){
    if(!this.currentCar){
      return "list-group-item actice"
    }
    else{
      return "list-group-item"
    }
  }
  getUsers(){
    this.carService.getCars().subscribe(response=>{
      this.cars = response.data
    })
  }
  setCurrentUser(user : User){
    this.currentUser = user;
  }
  getCurrentUserClass(user :User){
    if(user == this.currentUser){
      return "list-group-item active"
    }
    else{
      return "list-group-item "
    }
  }
  getAllUserClass(){
    if(!this.currentUser){
      return "list-group-item actice"
    }
    else{
      return "list-group-item"
    }
  }
}