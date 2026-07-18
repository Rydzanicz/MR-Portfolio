import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, ActivatedRoute } from '@angular/router';
import { NawigacjaComponent } from './layout/nawigacja/nawigacja.component';
import { StopkaComponent } from './layout/stopka/stopka.component';
import { przejscieStron } from './przejscia.animacje';

/**
 * Układ (layout) strony stowarzyszenia „A Tacy Sami".
 * Zawiera własną nawigację i stopkę stowarzyszenia oraz router-outlet
 * dla podstron. Dzięki temu sekcja wygląda jak osobny, samodzielny serwis
 * — bez powiązania z portfolio i bez powrotu do niego.
 *
 * Dodatkowo: płynna animacja przejścia między podstronami (motyw latawce).
 */
@Component({
  selector: 'app-atacysami-layout',
  standalone: true,
  imports: [RouterModule, NawigacjaComponent, StopkaComponent],
  animations: [przejscieStron],
  template: `
    <div class="atacysami-scope">
      <!-- dekoracyjne latawce w tle (motyw wersji błękitnej) -->
      <span class="latawiec l1" aria-hidden="true"></span>
      <span class="latawiec l2" aria-hidden="true"></span>
      <span class="latawiec l3" aria-hidden="true"></span>

      <app-nawigacja></app-nawigacja>

      <main class="outlet-wrap">
        <div [@przejscieStron]="pobierzStan(outlet)">
          <router-outlet #outlet="outlet"></router-outlet>
        </div>
      </main>

      <app-stopka></app-stopka>
    </div>
  `,
  styles: [`
    .outlet-wrap { position: relative; }
  `]
})
export class AtacysamiLayoutComponent {
  /** Zwraca unikalny znacznik trasy, by animacja odpaliła się przy każdej zmianie podstrony. */
  pobierzStan(outlet: RouterOutlet): string {
    return outlet?.isActivated ? outlet.activatedRoute.snapshot.url.join('/') || 'root' : 'pusty';
  }
}
