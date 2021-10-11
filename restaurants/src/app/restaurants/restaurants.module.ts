import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from './../shared/shared.module';
import { RestaurantsComponent } from './container/restaurants/restaurants.component';
import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { RestaurantEffects } from './store/restaurant.effects';
import * as fromrestaurant from './store/restaurant.reducer';

@NgModule({
  declarations: [RestaurantsComponent],
  imports: [
    CommonModule,
    RestaurantsRoutingModule,
    StoreModule.forFeature(
      fromrestaurant.restaurantsFeatureKey,
      fromrestaurant.reducer
    ),
    EffectsModule.forFeature([RestaurantEffects]),
    SharedModule,
  ],
})
export class restaurantsModule {}
