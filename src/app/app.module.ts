import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import{ToastrModule} from 'ngx-toastr';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FileUploadModule} from 'ng2-file-upload';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { BrandComponent } from './components/brand/brand.component';
import { FilterComponent } from './components/filter/filter.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CarAddComponent } from './components/add/car-add/car-add.component';
import { BrandAddComponent } from './components/add/brand-add/brand-add.component';
import { ColorAddComponent } from './components/add/color-add/color-add.component';
import { CarDetailComponent } from './components/car/car-detail/car-detail.component';
import { FooterComponent } from './components/footer/footer.component';
import { NaviComponent } from './components/navi/navi.component';
import { HomeComponent } from './components/home/home.component';
import { BrandUpdateComponent } from './components/brand/brand-update/brand-update.component';
import { BrandListComponent } from './components/list/brand-list/brand-list.component';
import { CarImageComponent } from './components/car/car-image/car-image.component';
import { CarUpdateComponent } from './components/car/car-update/car-update.component';
import { ColorListComponent } from './components/list/color-list/color-list.component';
import { ColorUpdateComponent } from './components/color/color-update/color-update.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { TabComponent } from './components/tab/tab.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { CarFilterPipe } from './pipes/car-filter.pipe';
import { BrandFilterPipe } from './pipes/brand-filter.pipe';
import { ColorFilterPipe } from './pipes/color-filter.pipe';
import { JwtModule } from '@auth0/angular-jwt';
import { CartComponent } from './components/cart/cart.component';
import { CardComponent } from './components/card/card.component';
import { AuthComponent } from './components/auth/auth.component';
import { RentalAddComponent } from './components/rental/rental-add/rental-add.component';
import { RentalFilterPipe } from './pipes/rental-filter.pipe';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { MenuComponent } from './components/menu/menu.component';
import { CarListComponent } from './components/list/car-list/car-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    NaviComponent,
    ColorComponent,
    CustomerComponent,
    RentalComponent,
    TabComponent,
    CarDetailComponent,
    FilterComponent,
    PaymentComponent,
    CarAddComponent,
    BrandAddComponent,
    ColorAddComponent,
    FooterComponent,
    BrandComponent,
    HomeComponent,
    BrandUpdateComponent,
    BrandListComponent,
    CarImageComponent,
    CarListComponent,
    CarUpdateComponent,
    ColorListComponent,
    ColorUpdateComponent,
    RegisterComponent,
    LoginComponent,
    ChangePasswordComponent,
    ProfileComponent,
    CartComponent,
    CarFilterPipe,
    BrandFilterPipe,
    ColorFilterPipe,
    CardComponent,
    AuthComponent,
    RentalAddComponent,
    RentalFilterPipe,
    ListComponent,
    AddComponent,
    MenuComponent,
    
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
    BrowserAnimationsModule,
    FileUploadModule,
    JwtModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }