import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { Pizza } from '../models/pizza.model';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class PizzasService {
  constructor(private http: HttpClient) {}

  getPizzas(): Observable<Pizza[]> {
    return this.http
      .get<Pizza[]>(`http://localhost:3000/pizzas`)
      .pipe(catchError((error: any) => throwError(() => new Error(error))));
  }

  createPizza(payload: Pizza): Observable<Pizza> {
    return this.http
      .post<Pizza>(`http://localhost:3000/pizzas`, payload)
      .pipe(catchError((error: any) => throwError(() => new Error(error))));
  }

  updatePizza(payload: Pizza): Observable<Pizza> {
    return this.http
      .put<Pizza>(`http://localhost:3000/pizzas/${payload.id}`, payload)
      .pipe(catchError((error: any) => throwError(() => new Error(error))));
  }

  removePizza(payload: Pizza): Observable<Pizza> {
    return this.http
      .delete<any>(`http://localhost:3000/pizzas/${payload.id}`)
      .pipe(catchError((error: any) => throwError(() => new Error(error))));
  }
}
