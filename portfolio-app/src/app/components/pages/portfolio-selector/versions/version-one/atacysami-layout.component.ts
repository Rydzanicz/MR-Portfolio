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
      <app-nawigacja></app-nawigacja>
      <main>
        <router-outlet></router-outlet>
      </main>
      <app-stopka></app-stopka>
    </div>
  `
})
export class AtacysamiLayoutComponent {}
