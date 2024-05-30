import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterModule],
  template: `
<div class="p-5">
     <article class="h-full w-full flex flex-col md:flex-row items-center justify-center gap-5 mt-10">
      <img
        class="h-[350px]"
        [src]="housingLocation?.photo"
        alt="Exterior photo of {{ housingLocation?.name }}"
        crossorigin
      />
      <div>

      <section class="listing-description">
        <h2 class="listing-heading">{{ housingLocation?.name }}</h2>
        <p class="listing-location">{{ housingLocation?.city }}, {{ housingLocation?.state }}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this housing location</h2>
        <ul>
          <li>Units available: {{ housingLocation?.availableUnits }}</li>
          <li>Does this location have wifi: {{ housingLocation?.wifi }}</li>
          <li>Does this location have laundry: {{ housingLocation?.laundry }}</li>
        </ul>
      </section>
      </div>
    </article>
    <div class="flex items-center justify-center mt-4">
      <a [routerLink]="['/']" class="underline hover:text-blue-500">Back to home page</a>

    </div>
</div>

  `,
  styleUrl: './details.component.css'
})

export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocationId = -1;
  housingLocation: HousingLocation | undefined;

  constructor() {
    this.housingLocationId = +this.route.snapshot.params['id'];
    this.housingLocation = this.housingService.getHousingLocationById(this.housingLocationId);
  }


}
