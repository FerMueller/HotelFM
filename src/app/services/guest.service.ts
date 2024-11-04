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

  // Create New Credit Card
  createGuest(guest: Guest): Observable<Guest> {
    //return this.httpClient.post<Guest>(this.apiUrl, guest);
    return this.apiService.post(this.apiUrl,guest)
  }

  // Get All Credit Cards
  getGuests(): Observable<Guest[]>{
    //return this.httpClient.get<Guest[]>(this.apiUrl); 
    return this.apiService.get(this.apiUrl)
  }

  // Get Specific Credit Card
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
     const url = `${this.apiUrl}/buscar/nome?nome=${name}`;
     return this.apiService.get<Guest>(url);
  }

  // Buscar por documento
  findByDocument(documento: string): Observable<Guest[]> {
    const url =`${this.apiUrl}/buscar/documento?documento=${documento}`;
    return this.apiService.get<Guest>(url);
  }

  // Buscar por telefone
  findbyPhone(telefone: string): Observable<Guest[]> {
    const url = `${this.apiUrl}/buscar/telefone?telefone=${telefone}`;
    return this.apiService.get<Guest>(url);
  }

  // Listar hóspedes no hotel
  inHotel(): Observable<Guest[]> {
    const url =`${this.apiUrl}/no-hotel`;
    return this.apiService.get<Guest>(url);
  }

  listWithoutCheckin(): Observable<Guest[]> {
    const url = `${this.apiUrl}/sem-checkin`;
    return this.apiService.get<Guest>(url);
  }

}