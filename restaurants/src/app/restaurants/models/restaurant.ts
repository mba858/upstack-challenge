export interface Restaurant {
  id: string;
  name: string;
  rating: number;
  cuisine: string[];
  city: string;
  popularFood: string[];
  description?: string;
  image: number;
}
