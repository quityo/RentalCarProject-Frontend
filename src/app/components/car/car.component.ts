
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars : Car[] = [];
  imageBasePath  = environment.imageUrl;
  filterText = "";
  

  constructor(private carService: CarService,
    private activatedRoute: ActivatedRoute, 
    private toastrService:ToastrService) { }

  ngOnInit(): void {

      this.activatedRoute.params
        .subscribe((params) => {
          if(params["brandId"]){
            this.getCarsByBrand(params["brandId"]);
          }
          else if(params["colorId"]){
            this.getCarsByColor(params["colorId"]);
          }
          else{
            this.getCars();
          }
        });
  }

  getCars(){
    this.carService.getCars()
      .subscribe(response => {
        this.cars = response.data;
      });
  }

  getCarsByBrand(brandId: number){
    this.carService.getCarsByBrand(brandId)
      .subscribe((response) => {
        this.cars = response.data;
      });
  }

  getCarsByColor(colorId: number){
    this.carService.getCarsByColor(colorId)
      .subscribe((response) => {
        this.cars = response.data;
      });
  }

  getCarImage(car:Car){

    if(car.imagePath){
      return car.imagePath
    }
    else{
      return 'default.jpg'
    }
  }
 
 /*  addToCart(car: Car){
    
    this.toastrService.success("Add Cart", car.carName)
  } */
}
