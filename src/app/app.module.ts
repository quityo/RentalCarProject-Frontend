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
import { TabComponent } from './components/tab/tab.component';
import { CarFilterPipePipe } from './pipes/car-filter-pipe.pipe';
import { FilterComponent } from './components/filter/filter.component';
import { BrandFilterPipePipe } from './pipes/brand-filter-pipe.pipe';
import { ColorFilterPipePipe } from './pipes/color-filter-pipe.pipe';
import { PaymentComponent } from './components/payment/payment.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';
import { ColorAddComponent } from './components/color/color-add/color-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { BrandFilterComponent } from './components/filter/brand-filter/brand-filter.component';
import { CustomerAddComponent } from './components/customer/customer-add/customer-add.component';
import { FooterComponent } from './components/footer/footer.component';
import { NaviComponent } from './components/navi/navi.component';
import { ColorFilterComponent } from './components/filter/color-filter/color-filter.component';
import { BrandComponent } from './components/brand/brand.component';


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
    CarFilterPipePipe,
    FilterComponent,
    BrandFilterPipePipe,
    ColorFilterPipePipe,
    PaymentComponent,
    CarAddComponent,
    BrandAddComponent,
    ColorAddComponent,
    BrandFilterComponent,
    CustomerAddComponent,
    FooterComponent,
    ColorFilterComponent,
    BrandComponent
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
    
   
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }