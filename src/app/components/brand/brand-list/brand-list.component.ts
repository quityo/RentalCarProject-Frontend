import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {
  carImages : CarImage[] = [];

  brands : Brand[] = [];
  constructor(private brandService : BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }
  getBrands(){
    this.brandService.getBrands().subscribe((response) =>{
      this.brands = response.data
    });
  }
  deleteBrand(brand : Brand){
    this.brandService.delete(brand).subscribe();
  }

}