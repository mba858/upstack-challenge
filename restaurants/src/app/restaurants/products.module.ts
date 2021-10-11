import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';
import { restaurantsComponent } from './container/restaurants/restaurants.component';
import { restaurantsRoutingModule } from './restaurants-routing.module';
import { restaurantEffects } from './store/restaurant.effects';
import * as fromrestaurant from './store/restaurant.reducer';

@NgModule({
  declarations: [restaurantsComponent],
  imports: [
    CommonModule,
    restaurantsRoutingModule,
    StoreModule.forFeature(fromrestaurant.restaurantsFeatureKey, fromrestaurant.reducer),
    EffectsModule.forFeature([restaurantEffects]),
    SharedModule
  ]
})
export class restaurantsModule { }
