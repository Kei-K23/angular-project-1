import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housinglocation';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
  <div class=" bg-blue-200 rounded-xl border shadow pb-5">
    <img class="w-full h-[220px] rounded-t-xl" src={{housingLocation.photo}} alt="Image of {{ housingLocation.name }}"
    >
    <h2 class="text-lg font-bold mt-2 mx-3">{{ housingLocation.name }}</h2>
    <p class="mx-3 mb-5">{{ housingLocation.city }}</p>
    <a class="mx-3 underline cursor-pointer hover:text-blue-500" [routerLink]="['/details', housingLocation.id]">See more</a>
  </div>
  `,
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
