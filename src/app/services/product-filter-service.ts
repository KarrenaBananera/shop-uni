import { Injectable } from '@angular/core';
import { FilterSettings, SortSettings } from './filter-settings';


@Injectable({
  providedIn: 'root' 
})
export class ProductFilterService {
  public filter = new FilterSettings();
  public sort = new SortSettings();

}