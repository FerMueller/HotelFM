import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Booking } from 'src/app/models/booking';
import { Guest } from 'src/app/models/guest';
import { BookingService } from 'src/app/services/booking.service';
import { GuestService } from 'src/app/services/guest.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit{

  hospedes: Guest[] = [];
  private subscription: Subscription | undefined;

  constructor(private bookingService :BookingService,
    private router: Router, private hospedeService: GuestService ){
  }

  newBooking: Booking = {
    id: undefined,
    guesId: 0,
    dtEndBooking: "",
    dtStartBooking: "",
    hasCar: false
  }

  ngOnInit(): void {
    this.loadGuests();
  }

  loadGuests(): void {
    this.hospedeService.getGuests().subscribe(data => {
      this.hospedes = data;
    });
  }

  
  saveBooking(){
    this.subscription = this.bookingService.createBooking(this.newBooking).subscribe(data => {
      alert("Reserva adicionada");
      this.router.navigate(['booking']);
    })
  }

  ngOnDestroy(){
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
