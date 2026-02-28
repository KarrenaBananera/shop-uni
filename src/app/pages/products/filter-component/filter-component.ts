import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-filter-component',
  imports: [MatSliderModule],
  templateUrl: './filter-component.html',
  styleUrl: './filter-component.css',
})
export class FilterComponent {
  startPrice = 0;
  endPrice = 500;
  selectedRating: string = 'all';
  
   onStartChange(newValue: number) {
    this.startPrice = newValue;
  }

  onEndChange(newValue: number) {
        this.endPrice = newValue;
  }

  selectRating(value: string) {
      if (value === this.selectedRating)
        this.selectedRating = 'all';
      else
        this.selectedRating = value;
  }
}