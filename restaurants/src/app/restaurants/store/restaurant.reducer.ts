import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { Restaurant } from '../models/restaurant';
import * as restaurantActions from './restaurant.actions';

export const restaurantsFeatureKey = 'restaurants';

export interface RestaurantState extends EntityState<Restaurant> {
  isLoading: boolean;
  error: string | null;
}

export const adapter: EntityAdapter<Restaurant> =
  createEntityAdapter<Restaurant>();

export const initialState: RestaurantState = adapter.getInitialState({
  isLoading: true,
  error: null,
});

export const reducer = createReducer(
  initialState,
  on(restaurantActions.addrestaurant, (state, action) =>
    adapter.addOne(action.Restaurant, state)
  ),
  on(restaurantActions.updaterestaurant, (state, action) =>
    adapter.updateOne(action.Restaurant, state)
  ),
  on(restaurantActions.deleterestaurant, (state, action) =>
    adapter.removeOne(action.id, state)
  ),
  on(restaurantActions.loadrestaurants, (state, action) =>
    adapter.setAll(action.restaurants, {
      ...state,
      isLoading: false,
    })
  ),
  on(restaurantActions.requestLoadrestaurants, (state, action) =>
    adapter.setAll([], {
      ...state,
      isLoading: true,
    })
  )
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

export const selectIsLoading = (state: RestaurantState) => state.isLoading;
export const selectError = (state: RestaurantState) => state.error;
