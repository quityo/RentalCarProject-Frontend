import { RouterModule, Routes } from '@angular/router';
import {NgModule} from '@angular/core';
import { CarComponent } from './components/car/car.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CarDetailComponent } from './components/car/car-detail/car-detail.component';
import { ColorComponent } from './components/color/color.component';
import { CarAddComponent } from './components/add/car-add/car-add.component';
import { BrandAddComponent } from './components/add/brand-add/brand-add.component';
import { BrandComponent } from './components/brand/brand.component';
import { HomeComponent } from './components/home/home.component';
import { BrandUpdateComponent } from './components/brand/brand-update/brand-update.component';
import { BrandListComponent } from './components/list/brand-list/brand-list.component';
import { ColorUpdateComponent } from './components/color/color-update/color-update.component';
import { ColorListComponent } from './components/list/color-list/color-list.component';
import { CarListComponent } from './components/list/car-list/car-list.component';
import { CarUpdateComponent } from './components/car/car-update/car-update.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginGuard } from './guards/login.guard';
import { CarImageComponent } from './components/car/car-image/car-image.component';
import { CartComponent } from './components/cart/cart.component';
import { CardComponent } from './components/card/card.component';
import { UserComponent } from './components/user/user.component';
import { CustomerListComponent } from './components/list/customer-list/customer-list.component';
import { UserImageComponent } from './components/user/user-image/user-image.component';
import { RentalListComponent } from './components/list/rental-list/rental-list.component';
import { AdminGuard } from './guards/admin.guard';
import { AdminComponent } from './components/admin/admin/admin.component';
import { ColorAddComponent } from './components/add/color-add/color-add.component';
import { RentalComponent } from './components/rental/rental/rental.component';
import { UserDetailComponent } from './components/user/user-detail/user-detail.component';
import { CardListComponent } from './components/list/card-list/card-list/card-list.component';
import { ProfileDetailComponent } from './components/profile/profile-detail/profile-detail/profile-detail.component';
import { CustomerAddComponent } from './components/add/customer-add/customer-add/customer-add.component';
import { UserUpdateComponent } from './components/user/user-update/user-update/user-update.component';
import { UserOperationClaimUpdateComponent } from './components/Operation/user-operation/user-operation-claim-update/user-operation-claim-update/user-operation-claim-update.component';


const routes: Routes = [
  {path:"" , pathMatch:"full", component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/brand/:brandId", component:CarComponent},
  {path:"cars/color/:colorId", component:CarComponent},
  {path:"cars/brand/:brandId/color:colorId", component:CarComponent},
  {path:"cars/detail/:carId",component:CarDetailComponent},
  {path:"cars/filter/:colorId",component:CarComponent},
  {path:"cars/filter/:brandId",component:CarComponent},
  {path:"cars/add",component:CarAddComponent, canActivate:[ AdminGuard]},
  {path:"carlist",component:CarListComponent, canActivate:[ AdminGuard]},
  {path:"cars/update/:carId",component:CarUpdateComponent, canActivate:[AdminGuard]},
  {path:"cars/images/add/:carId",component:CarUpdateComponent, canActivate:[AdminGuard]},

  {path:"brands",component:BrandComponent},
  {path:"brands/add",component:BrandAddComponent, canActivate:[AdminGuard]},
  {path:"brands/update/:brandId",component:BrandUpdateComponent, canActivate:[AdminGuard]},
  {path:"brandlist",component:BrandListComponent, canActivate:[AdminGuard]},

  {path:"colors",component:ColorComponent},
  {path:"colors/add",component:ColorAddComponent, canActivate:[LoginGuard]},
  {path:"colors/update/:colorId",component:ColorUpdateComponent, canActivate:[LoginGuard]},
  {path:"colors/update",component:ColorUpdateComponent, canActivate:[LoginGuard]},
  {path:"colorlist",component:ColorListComponent, canActivate:[AdminGuard]},

  
  {path:"customers/add",component:CustomerAddComponent},
 
  {path:"customerlist", component: CustomerListComponent}, 

  
  {path:"rentallist",component:RentalListComponent},
  {path:"rental",component:RentalComponent},
  {path:"rental/:carId", component:RentalComponent},
  {path:"rental/paymentadd",component:RentalComponent},
  

  {path:"payments/:rental",component:PaymentComponent},
  {path:"payments", component:PaymentComponent, canActivate:[LoginGuard]},
  {path:"carimages",component:CarImageComponent},
  {path:"carimages/:carId", component:CarImageComponent, canActivate:[LoginGuard]},
  

  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},

  {path:"profile",component:ProfileComponent,canActivate:[LoginGuard]},
  {path:"profile/:userId",component:ProfileDetailComponent,canActivate:[LoginGuard]},

  {path:"card",component:CardComponent},
  {path:"cardlist",component:CardListComponent, canActivate:[AdminGuard]},
  
 {path:'users/getall',component:UserComponent, canActivate:[AdminGuard]},
 {path:'users/:userId',component:UserDetailComponent, canActivate:[LoginGuard]},
 {path:'users',component:UserDetailComponent},
 {path:'user',component:UserComponent},
 {path:"users/customer/:customerId",component:UserComponent},
 {path:"users/rolesupdate/:userId",component:UserOperationClaimUpdateComponent},
 {path:"userimages/:userId", component:UserImageComponent, canActivate:[LoginGuard]},
 
 {path:"cart", component:CartComponent, canActivate:[LoginGuard]},
 
 {path:"admin", component: AdminComponent, canActivate:[AdminGuard]}
 
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
