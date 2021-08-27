import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { Customer } from 'src/app/models/customer';
import { Rental, RentalDetail } from 'src/app/models/rental';
import { AuthService } from 'src/app/services/auth.service';
import { CustomerService } from 'src/app/services/customer.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css'],
  providers: [DatePipe],
})
export class RentalComponent implements OnInit {
  customers: Customer[];
  customerId: number;
  rentDate: Date;
  returnDate: Date;
  @Input() car: Car;

  rentals: Rental[] = [];
  minDate: string | any;
  maxDate: string | null;
  maxMinDate: string | null;
  firstDateSelected: boolean = false;
  rentaldetails: RentalDetail[] = [];
  dataLoaded = false;

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private rentalService: RentalService,
    private toastrService: ToastrService,
    private authService: AuthService,
    private datePipe: DatePipe,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCustomer();
    this.getRentals();
    this.getRentalDetails();
  }
  getRentalDetails() {
    this.rentalService.getRentalDetails().subscribe((response) => {
      this.rentaldetails = response.data;
      this.dataLoaded = true;
    });
  }
  getRentals() {
    this.rentalService.getRentals().subscribe((response) => {
      this.rentals = response.data;
    });
  }
  createRental() {
    let MyRental: Rental = {
      carId: this.car.carId,
      brandName: this.car.brandName,
      colorName: this.car.colorName,
      dailyPrice: this.car.dailyPrice,
      description: this.car.description,
      customerId: this.customerId,
      rentDate: this.rentDate,
      returnDate: this.returnDate,
    };
    if (MyRental.customerId == undefined || MyRental.rentDate == undefined) {
      this.toastrService.error('AUGHTUNG!!');
    } else {
      this.router.navigate(['/payments', JSON.stringify(MyRental)]);
      this.toastrService.info(
        'Ödeme sayfasına yönlendiriliyorsunuz...',
        'Ödeme İşlemleri'
      );
    }
  }

  setCustomerId(customerId: string) {
    this.customerId = +customerId;
    console.log(this.customerId);
  }
  getCustomer() {
    this.customerService.getCustomers().subscribe((response) => {
      this.customers = response.data;
      console.log(response.data);
    });
  }
  getRentMinDate() {
    this.minDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    return this.minDate;
  }

  getReturnMinDate() {
    if (this.rentDate != undefined) {
      let stringToDate = new Date(this.rentDate);
      let new_date = new Date();
      new_date.setDate(stringToDate.getDate() + 1);
      return new_date.toISOString().slice(0, 10);
    } else {
      return this.rentDate;
    }
  }
  getReturnMaxDate() {
    this.maxDate = this.datePipe.transform(
      new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
      'yyyy-MM-dd'
    );
    return this.maxDate;
  }
  onChangeEvent(event: any) {
    this.minDate = event.target.value;
    this.firstDateSelected = true;
  }
}
