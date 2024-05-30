import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housinglocation';


@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class=" bg-blue-200 rounded-xl border shadow pb-5">
    <img class="w-full h-[220px] rounded-t-xl" src={{housingLocation.photo}} alt="Image of {{ housingLocation.name }}"
    >
    <h2 class="text-lg font-bold mt-2 mx-3">{{ housingLocation.name }}</h2>
    <p class="mx-3">{{ housingLocation.city }}</p>
  </div>
  `,
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
