import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  template: `
    <main>
      <header class="flex items-center py-2 px-10 bg-slate-100 shadow-md shadow-slate-200">
        <img class="w-12 h-12" src="/assets/logo.png" alt="logo" aria-hidden="true" />
        Home
      </header>
      <section >
        <app-home></app-home>
      </section>
    </main>
  `,
  styleUrl: "./app.component.css"
})

export class AppComponent {
  title = 'angular-pj-1';
}
