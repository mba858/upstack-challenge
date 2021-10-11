import { restaurants } from './restaurant.selectors';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, debounceTime, delay } from 'rxjs/operators';

import { RestaurantService } from '../service/restaurant.service';
import {
  loadrestaurants,
  requestLoadrestaurants,
  searchrestaurant,
} from './restaurant.actions';

@Injectable()
export class RestaurantEffects {
  constructor(private actions$: Actions, private service: RestaurantService) {}

  loadrestaurants$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestLoadrestaurants),
      switchMap((action) =>
        this.service.load().pipe(
          delay(3000),
          map((data) => loadrestaurants({ restaurants: data }))
        )
      )
    )
  );

  searchrestaurant$ = createEffect(() =>
    this.actions$.pipe(
      ofType(searchrestaurant),
      switchMap((action) =>
        this.service.search(action.searchQuery).pipe(
          delay(1000),
          map((data) => loadrestaurants({ restaurants: data }))
        )
      )
    )
  );
}
