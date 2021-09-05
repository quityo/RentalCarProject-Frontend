import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { CarImage } from 'src/app/models/carImage';
import { BrandService } from 'src/app/services/brand.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {
  carImages : CarImage[] = [];

  brands : Brand[] = [];
  constructor(private brandService : BrandService,
    private toastrService:ToastrService,
    private router:Router) { }

  ngOnInit(): void {
    this.getBrands();
  }
  getBrands(){
    this.brandService.getBrands().subscribe((response) =>{
      this.brands = response.data
    });
  }
  deleteBrand(brand : Brand){
    this.brandService.delete(brand).subscribe()
    this.router.navigate(['brandlist'])
        .then(() => {
          window.location.reload();
        });
  }
  addBrand(brand : Brand){
    this.brandService.add(brand).subscribe(response => {
      this.toastrService.success(response.message,"Successful")
    this.router.navigate(['brandlist'])
    .then(() => {
      window.location.reload();
    });
  });}
}