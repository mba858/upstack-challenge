import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';

import { Restaurant } from '../models/restaurant';

export const requestLoadrestaurants = createAction(
  '[Restaurant/API] Request Load restaurants'
);

export const loadrestaurants = createAction(
  '[Restaurant/API] Load restaurants',
  props<{ restaurants: Restaurant[] }>()
);

export const addrestaurant = createAction(
  '[Restaurant/API] Add Restaurant',
  props<{ Restaurant: Restaurant }>()
);

export const updaterestaurant = createAction(
  '[Restaurant/API] Update Restaurant',
  props<{ Restaurant: Update<Restaurant> }>()
);

export const deleterestaurant = createAction(
  '[Restaurant/API] Delete Restaurant',
  props<{ id: string }>()
);

export const searchrestaurant = createAction(
  '[Restaurant/API] Search restaurants',
  props<{ searchQuery: string }>()
);
