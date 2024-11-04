import { Injectable } from '@angular/core';
import { Guest } from '../models/guest';
import { Observable } from 'rxjs';
import { ApiService } from '../core/service/api.service';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  private apiUrl = "http://localhost:8080/api/guest";

  constructor(private apiService: ApiService) { }

  // CRUD Functionality 

  // Create New Guest
  createGuest(guest: Guest): Observable<Guest> {
    return this.apiService.post(this.apiUrl,guest)
  }

  // Get All Guests
  getGuests(): Observable<Guest[]>{
    return this.apiService.get(this.apiUrl)
  }

  // Get Specific Guest
  getGuestById(id: Number): Observable<Guest> {
    const url = `${this.apiUrl}/${id}`;
    return this.apiService.get<Guest>(url);
  }

  // Update Functionality 
  updateGuest(guest: Guest): Observable<Guest> {
    const url = `${this.apiUrl}/${guest.id}`;
    return this.apiService.put(url, guest);
  }

  // Delete Functionality
  deleteGuest(id: Number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.apiService.delete(url);
  }

  findByName(name: string): Observable<Guest[]> {
     const url = `${this.apiUrl}/find/name?nome=${name}`;
     return this.apiService.get<Guest>(url);
  }

  // Find by document
  findByDocument(documento: string): Observable<Guest[]> {
    const url =`${this.apiUrl}/find/document?documento=${documento}`;
    return this.apiService.get<Guest>(url);
  }

  // Find by phone
  findbyPhone(telefone: string): Observable<Guest[]> {
    const url = `${this.apiUrl}/find/phone?telefone=${telefone}`;
    return this.apiService.get<Guest>(url);
  }

  // Find in Hotel
  inHotel(): Observable<Guest[]> {
    const url =`${this.apiUrl}/in-hotel`;
    return this.apiService.get<Guest>(url);
  }

  // Find without checkin
  listWithoutCheckin(): Observable<Guest[]> {
    const url = `${this.apiUrl}/without-checkin`;
    return this.apiService.get<Guest>(url);
  }

}