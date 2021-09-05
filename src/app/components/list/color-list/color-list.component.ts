import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css']
})
export class ColorListComponent implements OnInit {

  colors:Color[]=[];
  colorUpdateForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private colorService: ColorService,
    private toastrService:ToastrService,
    private router:Router) { }

  ngOnInit(): void {
    this.createColorUpdateForm();
    this.getColors();
  }
  getColors(){
    this.colorService.getColors().subscribe((response) =>{
      this.colors  = response.data
    })
  }
  deleteColor(color : Color){
    this.colorService.delete(color).subscribe(response => {
      this.toastrService.success(response.message,"Successful")
    this.router.navigate(['colorlist'])
    .then(() => {
      window.location.reload();
    });
  });}
 
  addColor(color : Color){
    this.colorService.add(color).subscribe(response => {
      this.toastrService.success(response.message,"Successful")
    this.router.navigate(['colorlist'])
    .then(() => {
      window.location.reload();
    });
  });}
  createColorUpdateForm()
  {
    this.colorUpdateForm = this.formBuilder.group({
      colorId:["",Validators.required],
      colorName:["",Validators.required]
    });
  }

  updateColor() {
    if (this.colorUpdateForm.valid) {
      let colorModel = Object.assign({}, this.colorUpdateForm.value);
      this.colorService.update(colorModel).subscribe((response) => {
        this.toastrService.success(response.message, "Success")
        
    this.router.navigate(['colorlist'])
    .then(() => {
      window.location.reload();
    });
        
      });
    }
    else{
        this.toastrService.error("Please fill in all fields on the form","Error");
    }
  }

}