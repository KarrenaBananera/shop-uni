import { signal } from '@angular/core';

export type RatingFilter = 'all' | '5plus' | '4plus' | '3plus';
export type SortOption = 'name' | 'priceDesc' | 'priceAsc';

export class FilterSettings {
  ratingFilter = signal<RatingFilter>('all');
  minPrice = signal<number | null>(null);
  maxPrice = signal<number | null>(null);
}

export class SortSettings {
  sortBy = signal<SortOption>('name');
}