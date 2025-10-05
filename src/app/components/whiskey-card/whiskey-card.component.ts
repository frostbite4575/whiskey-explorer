import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-whiskey-card',
  imports: [],
  templateUrl: './whiskey-card.component.html',
  styleUrl: './whiskey-card.component.css'
})
export class WhiskeyCardComponent {
  
  @Input() whiskey: any;


  isCountryExpanded = false;
  
  toggleCountry() {
    this.isCountryExpanded = !this.isCountryExpanded;
  }
}
