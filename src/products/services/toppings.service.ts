import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { Topping } from '../models/topping.model';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class ToppingsService {
  constructor(private http: HttpClient) {}

  getToppings(): Observable<Topping[]> {
    return this.http
      .get<Topping[]>(`http://localhost:3000/toppings`)
      .pipe(
        catchError((error: any) => throwError(() => new Error(error)))
      );
  }
}
