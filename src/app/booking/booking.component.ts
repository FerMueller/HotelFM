import { Component, ViewChild } from '@angular/core';
import { Booking } from '../models/booking';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {

  booking: Booking[] = [];

  constructor(private bookingService: BookingService) {
    this.bookingService.getBookings().subscribe((data: Booking[]) => {
      this.booking = data;

      this.dataSource = new MatTableDataSource(this.booking);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    })
  }
  

  dataSource = new MatTableDataSource(this.booking);

  displayColumns = ["select", "id", "guesId", "dtStartBooking", "dtEndBooking", "dtCheckin", "dtCheckout", "hasCar", "qtAccValue", "actions"];

  selection = new SelectionModel(true, []);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  selectHandler(row: Booking) {
    this.selection.toggle(row as never);
  }

  // Realizar Check-in
  checkinBooking(id: number): void {
    this.bookingService.checkinBooking(id).subscribe(() => {
      this.getBookings();
    });
  }

  // Realizar Check-out
  checkoutBooking(id: number): void {
    this.bookingService.checkoutBooking(id).subscribe(() => {
      this.getBookings();
    });
  }

  getBookings(): void {
    this.bookingService.getBookings().subscribe((data: Booking[]) => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }


}

