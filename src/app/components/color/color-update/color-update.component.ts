import { Component, Input, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';


@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css']
})
export class ColorUpdateComponent implements OnInit {

  colors:Color[]=[];
  colorUpdateForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private colorService: ColorService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createColorUpdateForm();
    this.getColors();
  }


  getColors()
  {
    this.colorService.getColors().subscribe(response =>{
      this.colors = response.data;
    });
  }
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
        this.toastrService.success(response.message, "Success");
      });
    }
    else{
        this.toastrService.error("Please fill in all fields on the form","Error");
    }
  }

}