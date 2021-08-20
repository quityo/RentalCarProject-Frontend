import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { Rental } from 'src/app/models/rental';
import { User } from 'src/app/models/user';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';
import { RentalService } from 'src/app/services/rental.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  colors:Color[]
  brands:Brand[]
  user: User[];
  rentals : Rental[];
  currentBrandId:number;
  currentColorId:number;
  currentRentalId:number;
  currentUserId:number;

  constructor(private brandService:BrandService,
    private colorService:ColorService,
    private userService:UserService,
    private rentalService:RentalService,) { }

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
    this.getUsers();
    this.getRentals();
  }
  getBrands(){
    this.brandService.getBrands().subscribe((response)=>{
      this.brands=response.data
    })
  }
  getColors(){
    this.colorService.getColors().subscribe((response)=>{
      this.colors=response.data
    })
  }
  getRentals(){
    this.rentalService.getRentals().subscribe((response)=>{
      this.rentals=response.data
    })
  }
  setCurrentBrand(brandId:number){
    return(brandId===this.currentBrandId?true:false)
  }
  setCurrentColor(colorId:number){
    return(colorId===this.currentColorId?true:false)
  }
  setCurrentRental(rentalId:number){
    return(rentalId===this.currentRentalId?true:false)
  }
  getUsers(){
    this.userService.getUsers().subscribe(response=>{
      this.user = response.data
    })
  }
  setCurrentUser(userId:number){
    return(userId===this.currentBrandId?true:false)
  }

}
