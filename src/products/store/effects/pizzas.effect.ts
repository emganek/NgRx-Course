import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as pizzActions from '../actions/pizzas.action'
import { Observable, catchError, map, of, switchMap } from "rxjs";
import { PizzasService } from "src/products/services";

@Injectable()
export class PizzasEffects {
    loadPizzas$: Observable<any>;

    constructor(private actions$: Actions, private pizzasService: PizzasService) {
        this.loadPizzas$ = createEffect(() => this.actions$.pipe(
            ofType(pizzActions.LOAD_PIZZAS),
            switchMap(() => {
                return this.pizzasService.getPizzas().pipe(
                    map(pizzas => new pizzActions.LoadPizzasSuccess(pizzas)),
                    catchError(error => of(new pizzActions.LoadPizzasFail(error)))
                )
            })
        ))
    }
}