import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section class="flex justify-center items-center w-full my-6">
      <form>
        <input class="px-4 py-1 border-blue-500 border-2 rounded-lg" type="text" placeholder="Filter by city" #filter />
        <button class="ml-3 bg-blue-500 hover:bg-blue-600 transition active:scale-95 text-white px-2 py-1 rounded-md" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="px-5 grid grid-cols-12 gap-4">
      <app-housing-location class="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3" *ngFor="let housingLocation of filteredLocationList" [housingLocation]="housingLocation"></app-housing-location>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

  housingService: HousingService = inject(HousingService);

  housingLocationList: HousingLocation[] = [];
  filteredLocationList: HousingLocation[] = [];

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();

    this.filteredLocationList = this.housingLocationList;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter(housing => housing.city.toLowerCase().includes(text.toLowerCase()));
  }
}
