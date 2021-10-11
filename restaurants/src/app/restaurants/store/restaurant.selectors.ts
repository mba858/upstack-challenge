import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromStore from './restaurant.reducer';

const restaurantsSelector = createFeatureSelector<fromStore.RestaurantState>(
  fromStore.restaurantsFeatureKey
);

export const isLoading = createSelector(
  restaurantsSelector,
  fromStore.selectIsLoading
);
export const restaurants = createSelector(
  restaurantsSelector,
  fromStore.selectAll
);
export const error = createSelector(restaurantsSelector, fromStore.selectError);
