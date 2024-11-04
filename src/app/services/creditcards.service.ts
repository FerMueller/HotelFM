import { Injectable } from '@angular/core';
import { CreditCard } from '../models/credit-card';
import { Observable } from 'rxjs';
import { ApiService } from '../core/service/api.service';

@Injectable({
  providedIn: 'root'
})
export class CreditcardsService {

  private apiUrl = "http://localhost:8080/api/guest";

  constructor(private apiService: ApiService) { }

  // CRUD Functionality 

  // Create New Credit Card
  createCreditCard(creditCard: CreditCard): Observable<CreditCard> {
    //return this.httpClient.post<CreditCard>(this.apiUrl, creditCard);
    return this.apiService.post(this.apiUrl,creditCard)
  }

  // Get All Credit Cards
  getCreditCards(): Observable<CreditCard[]>{
    //return this.httpClient.get<CreditCard[]>(this.apiUrl); 
    return this.apiService.get(this.apiUrl)
  }

  // Get Specific Credit Card
  getCreditCardById(id: Number): Observable<CreditCard> {
    const url = `${this.apiUrl}/${id}`;
    return this.apiService.get<CreditCard>(url);
  }

  // Update Functionality 
  updateCreditCard(creditCard: CreditCard): Observable<CreditCard> {
    const url = `${this.apiUrl}/${creditCard.id}`;
    return this.apiService.put(url, creditCard);
  }

  // Delete Functionality
  deleteCreditCard(id: Number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.apiService.delete(url);
  }

}