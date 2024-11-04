import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService extends BaseService {
  constructor(private http: HttpClient) {
    super();
  }

  get<T>(url: string): Observable<any> {
    return this.http
      .get<T>(url)
      .pipe(take(1))
      .pipe(
      );
  }

  post(url: string, data: any): Observable<any> {
    return this.http
      .post<any>(url, data)
      .pipe(take(1))
      .pipe(
      );
  }

  put(url: string, data: any): Observable<any> {
    return this.http
      .put<any>(url, data)
      .pipe(take(1))
      .pipe(
      );
  }

  delete(url: string): Observable<any> {
    return this.http
      .delete<any>(url)
      .pipe(take(1))
      .pipe(
      );
  }
}
