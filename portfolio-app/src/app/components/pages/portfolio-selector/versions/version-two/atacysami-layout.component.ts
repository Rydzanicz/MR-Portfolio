import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NawigacjaComponent } from './layout/nawigacja/nawigacja.component';
import { StopkaComponent } from './layout/stopka/stopka.component';

/**
 * Układ (layout) strony stowarzyszenia „A Tacy Sami".
 * Zawiera własną nawigację i stopkę stowarzyszenia oraz router-outlet
 * dla podstron. Dzięki temu sekcja wygląda jak osobny, samodzielny serwis
 * — bez powiązania z portfolio i bez powrotu do niego.
 */
@Component({
  selector: 'app-atacysami-layout',
  standalone: true,
  imports: [RouterModule, NawigacjaComponent, StopkaComponent],
  template: `
    <div class="atacysami-scope">
      <!-- dekoracyjne latawce w tle (motyw wersji błękitnej) -->
      <span class="latawiec l1" aria-hidden="true"></span>
      <span class="latawiec l2" aria-hidden="true"></span>
      <span class="latawiec l3" aria-hidden="true"></span>

      <app-nawigacja></app-nawigacja>
      <main>
        <router-outlet></router-outlet>
      </main>
      <app-stopka></app-stopka>
    </div>
  `
})
export class AtacysamiLayoutComponent {}
