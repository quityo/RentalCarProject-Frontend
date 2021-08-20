import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css']
})
export class CarImageComponent implements OnInit {
  @Input() car : Car;
  
    imageRoot = environment.imageUrl
    carImage: CarImage[] = []
    
    carId: number
    imageFile : any
    baseUrl = environment.baseUrl;
    imageDataToUpload : any;
    imageToDelete : CarImage;
    imageToUpdate : CarImage;
    carImageAddForm : FormGroup;
    carImageUpdateForm : FormGroup;
    
    constructor(
      private activatedRoute: ActivatedRoute, 
      private carImageService:CarImageService,
      private toastrService: ToastrService) { }
  
    ngOnInit(): void {
      this.activatedRoute.params.subscribe(params=>{
        if(params["carId"]){
          this.carId = params["carId"]
          this.getCarDetailsById(params["carId"])
        }
      })
    }
  
    getCarDetailsById(carId:number) {
      this.carImageService.getCarImages(carId).subscribe((response) => {
        this.carImage = response.data;
      });
    }
  
    delete(carImage:CarImage){
      this.carImageService.delete(carImage).subscribe(response=>{
        this.getCarDetailsById(this.carId)
        this.toastrService.success("Resim silindi","Başarılı")
      }, responseError => {
        this.toastrService.success("Resim silinemedi!","Hata")
      })
    }
  
    addImage(){
      const carImage: FormData = new FormData();
      carImage.append('CarId', this.carId.toString());
      carImage.append("imageFile", this.imageFile, this.imageFile.name);
      this.carImageService.add( carImage ).subscribe(response=>{
        this.toastrService.success(response.message)
        this.getCarDetailsById(this.carId)
      },responseError=>{
        this.toastrService.error(responseError.error.message)
      })
    }
  
    fileSelected(event:any) {
      this.imageFile = event.target.files[0]
      event.target.nextElementSibling.innerText=this.imageFile.name
    }
  
  }