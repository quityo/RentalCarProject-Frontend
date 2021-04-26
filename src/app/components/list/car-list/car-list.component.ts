import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Car} from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
 
  cars : Car[] = [];
  color: Color[]=[];
  brand : Brand[] = [];
  constructor(private carService : CarService) { }

  ngOnInit(): void {
    this.getCars();
  }
  getCars(){
    this.carService.getCars().subscribe((response)=>{
      this.cars = response.data
    });
  }
  deleteCar(car : Car){
    this.carService.delete(car).subscribe();
  }
  

}