import { RouterModule, Routes } from '@angular/router';
import {NgModule} from '@angular/core';
import { CarComponent } from './components/car/car.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CarDetailComponent } from './components/car/car-detail/car-detail.component';

import { ColorComponent } from './components/color/color.component';
import { CarAddComponent } from './components/car/car-add/car-add.component';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';
import { ColorAddComponent } from './components/color/color-add/color-add.component';
import { BrandComponent } from './components/brand/brand.component';
import { HomeComponent } from './components/home/home.component';
import { BrandUpdateComponent } from './components/brand/brand-update/brand-update.component';
import { BrandListComponent } from './components/brand/brand-list/brand-list.component';
import { ColorUpdateComponent } from './components/color/color-update/color-update.component';
import { ColorListComponent } from './components/color/color-list/color-list.component';
import { CarListComponent } from './components/car/car-list/car-list.component';
import { CarUpdateComponent } from './components/car/car-update/car-update.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginGuard } from './guards/login.guard';
import { CarImageComponent } from './components/car/car-image/car-image.component';
import { CartComponent } from './components/cart/cart.component';
import { CardComponent } from './components/card/card.component';


const routes: Routes = [
  {path:"" , pathMatch:"full", component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/brand/:brandId", component:CarComponent},
  {path:"cars/color/:colorId", component:CarComponent},
  {path:"cars/brand/:brandId/color:colorId", component:CarComponent},
  {path:"cars/detail/:carId",component:CarDetailComponent},
  {path:"cars/filter/:brandId/:colorId",component:CarComponent},
  {path:"cars/add",component:CarAddComponent, canActivate:[LoginGuard]},
  {path:"carlist",component:CarListComponent},
  {path:"cars/update/:carId",component:CarUpdateComponent},
  {path:"cars/images/add/:carId",component:CarUpdateComponent},

  {path:"brands",component:BrandComponent},
  {path:"brands/add",component:BrandAddComponent},
  {path:"brands/update/:brandId",component:BrandUpdateComponent},
  {path:"brandlist",component:BrandListComponent},

  {path:"colors",component:ColorComponent},
  {path:"colors/add",component:ColorAddComponent},
  {path:"colors/update/:colorId",component:ColorUpdateComponent},
  {path:"colorlist",component:ColorListComponent},

  {path:"customers/getcustomerdetail",component:CustomerComponent},
  {path:"customers", component: CustomerComponent},  

  {path:"rentals",component:RentalComponent},
  {path:"rental/:carId", component:RentalComponent},
  {path:"rentals/paymentadd",component:RentalComponent},

  {path:"payments/:rental",component:PaymentComponent},
  {path:"payments", component:PaymentComponent, canActivate:[LoginGuard]},
  
  {path:"carimages",component:CarImageComponent},
  {path:"carimages/:carId", component:CarImageComponent, canActivate:[LoginGuard]},
  
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"profile",component:ProfileComponent},
  {path:"card",component:CardComponent},

   
  {path:"cart", component:CartComponent},

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
