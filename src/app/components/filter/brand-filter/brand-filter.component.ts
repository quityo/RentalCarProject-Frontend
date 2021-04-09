import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-filter',
  templateUrl: './brand-filter.component.html',
  styleUrls: ['./brand-filter.component.css']
})
export class BrandFilterComponent implements OnInit {

  brands:Brand[];
  currentBrandId:number;

  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
  this.getBrands();
    
  }
  getBrands(){
    this.brandService.getBrands().subscribe((response)=>{
      this.brands=response.data
    })
  }
  
  setCurrentBrand(brandId:number){
    return(brandId===this.currentBrandId?true:false)
  }
}
