import { Injectable } from '@angular/core';
import { Booking } from '../models/booking';
import { Observable, throwError } from 'rxjs';
import { ApiService } from '../core/service/api.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private apiUrl = "http://localhost:8080/api/booking";

  constructor(private apiService: ApiService) { }

  // CRUD Functionality 

  // Create New Booking
  createBooking(booking: Booking): Observable<Booking> {
    return this.apiService.post(this.apiUrl,booking)
  }

  // Get All Bookings
  getBookings(): Observable<Booking[]>{
    return this.apiService.get(this.apiUrl)
  }

  // Get Specific Booking
  getBookingById(id: Number): Observable<Booking> {
    const url = `${this.apiUrl}/${id}`;
    return this.apiService.get<Booking>(url);
  }

  // Update Functionality 
  updateBooking(booking: Booking): Observable<Booking> {
    const url = `${this.apiUrl}/${booking.id}`;
    return this.apiService.put(url, booking);
  }

  // Delete Functionality
  deleteBooking(id: Number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.apiService.delete(url);
  }

  checkinBooking(id: number): Observable<Booking> {
    const url = `${this.apiUrl}/${id}/checkin`;
    return this.apiService.post(url,{}).pipe(
        catchError(this.handleError)
      );;
  }

  checkoutBooking(id: number): Observable<Booking> {
    const url = `${this.apiUrl}/${id}/checkout`;
    return this.apiService.post(url,{});
  }

  private handleError(error: any): Observable<never> {
    if (error.error && error.error.message) {
      // Erro no lado do cliente
      alert(error.error.message);
    }
    return throwError('errorMessage');
  }

}