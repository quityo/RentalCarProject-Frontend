import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car} from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { RentalService } from 'src/app/services/rental.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  cars : Car;
  carImages : CarImage[] = [];
  currentImage : CarImage;
  imageBasePath  = environment.imageUrl;
  carName: string;

  constructor(
    private carService:CarService,
    private carImageService : CarImageService,
    private activatedRoute : ActivatedRoute,
    private toastrService : ToastrService
    
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarDetailsByCarId(params["carId"]);
        this.getCarImages(params["carId"]);
      }
    })
  }
  getCarDetailsByCarId(carId: number) {
    this.carService.getCarDetailsByCarId(carId).subscribe((response) => {
      this.cars = response.data[0];
    });

  }
  getCarImages(carId:number){
    this.carImageService.getCarImages(carId).subscribe((response)=>{
      this.carImages = response.data;
    })
  }
  getCurrentImageClass(image:CarImage){
    if(image==this.carImages[0]){
      return "carousel-item active"
    } else {
      return "carousel-item"
    }
  }
  getButtonClass(image:CarImage){
    if(image==this.carImages[0]){
      return "active"
    } else {
      return ""
    }
  }
  rentOnClick(){
    this.toastrService.info("Lütfen müşteri ve tarih seçin");
  }
}