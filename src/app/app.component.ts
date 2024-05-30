import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, RouterModule],
  template: `
    <main>
      <a [routerLink]="['/']">
        <header class="flex items-center py-2 px-10 bg-slate-100 shadow-md shadow-slate-200">
          <img class="w-12 h-12" src="/assets/logo.png" alt="logo" aria-hidden="true" />
          Home
        </header>
      </a>
      <section>
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrl: "./app.component.css"
})

export class AppComponent {
  title = 'angular-pj-1';
}
