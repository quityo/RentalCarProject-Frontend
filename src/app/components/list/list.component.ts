import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { Customer, CustomerDetail } from 'src/app/models/customer';
import { Rental } from 'src/app/models/rental';
import { RentalFilterPipe } from 'src/app/pipes/rental-filter.pipe';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  rentals : Rental[] = [];
  currentRental : Rental;

  brands : Brand[] = []
  currentBrand : Brand;  
  filterBrandText ="";

  colors : Color[] = [];
  currentColor : Color;
  filterColorText : "";

  cars : Car[] = [];  
  currentCar : Car;
  filterText : "";
 
  currentCustomer : Customer;
  

  constructor(private brandService : BrandService,
    private colorService : ColorService,
    private carService : CarService,
    private rentalService : RentalService,
    ) { }

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
    this.getCars();
    this.getRentals();
    
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
  getAllCustomerClass(){
    if(!this.currentCustomer){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }

  }
  
  getRentals(){
    this.rentalService.getRentals().subscribe(response=>{
      this.rentals = response.data
    })
  }
  setCurrentRental(rental:Rental){
    this.currentRental = rental;
  }

  getCurrentRentalClass(rental:Rental){
    if(rental == this.currentRental){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }
  getAllRentalClass(){
    if(!this.currentRental){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }

  }
}
