import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Restaurant } from './../models/restaurant';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  constructor(private http: HttpClient) {}

  load(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(environment.apiUrl);
  }

  search(searchQuery: string): Observable<Restaurant[]> {
    return this.load().pipe(
      map((list: Restaurant[]) =>
        list.filter(
          (value) =>
            value.name.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1
        )
      )
    );
  }
}
