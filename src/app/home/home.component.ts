import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <section class="flex justify-center items-center w-full my-6">
      <form>
        <input class="px-4 py-1 border-blue-500 border-2 rounded-lg" type="text" placeholder="Filter by city" />
        <button class="ml-3 bg-blue-500 hover:bg-blue-600 transition active:scale-95 text-white px-2 py-1 rounded-md" type="button">Search</button>
      </form>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
