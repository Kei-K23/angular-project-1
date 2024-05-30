import { Component } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section class="flex justify-center items-center w-full my-6">
      <form>
        <input class="px-4 py-1 border-blue-500 border-2 rounded-lg" type="text" placeholder="Filter by city" />
        <button class="ml-3 bg-blue-500 hover:bg-blue-600 transition active:scale-95 text-white px-2 py-1 rounded-md" type="button">Search</button>
      </form>
    </section>
    <section>
      <app-housing-location [housingLocation]="housingLocation"></app-housing-location>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingLocation: HousingLocation = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: '/assets/house-1.jpg',
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}
