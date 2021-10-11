import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromCartActions from '../../../header/store/header.actions';
import * as fromActions from '../../store/restaurant.actions';
import * as fromStore from '../../store/restaurant.reducer';
import * as fromSelector from '../../store/restaurant.selectors';
import { Restaurant } from './../../models/restaurant';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RestaurantsComponent implements OnInit {

  favoriteSeason: string | undefined;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  restaurants$: Observable<Restaurant[]>;

  constructor(private store: Store<fromStore.RestaurantState>) {
    this.store.dispatch(fromActions.requestLoadrestaurants());
    this.restaurants$ = this.store.select(fromSelector.restaurants);
    this.isLoading$ = this.store.select(fromSelector.isLoading);
    this.error$ = this.store.select(fromSelector.error);
    // this.store.select(state => state).subscribe(data => {
    //   console.log('data', data);
    // });
  }

  ngOnInit(): void { }

  // tslint:disable-next-line:no-shadowed-variable
  addrestaurantCart(restaurant: Restaurant): void {
    this.store.dispatch(fromCartActions.addToCart());
  }

}
