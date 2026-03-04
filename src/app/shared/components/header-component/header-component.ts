import { Component, HostListener } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header-component',
  imports: [RouterLink],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent {
  dropDownOn = false;

  onDropDownClick() {
    this.dropDownOn = !this.dropDownOn;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent) {
    const width = (event.target as Window).innerWidth;
    if (width >= 760) {
      this.dropDownOn = false;
    }
  }
}