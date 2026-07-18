import { Routes } from '@angular/router';

/**
 * Trasy strony stowarzyszenia „A Tacy Sami" — WERSJA 2 (błękitna, latawce).
 *
 * Osobny prefiks 'atacysami-v2', dzięki czemu wersja 2 może działać
 * RÓWNOLEGLE z wersją 1 (prefiks 'atacysami'), bez konfliktu tras.
 *
 * === JAK PODŁĄCZYĆ ===
 * 1) W głównym src/app/app.routes.ts zaimportuj:
 *      import { ATACYSAMI_V2_ROUTES } from './.../atacysami-v2.routes';
 *    (podaj ścieżkę do miejsca, gdzie wgrałeś folder v2, np.
 *     ./components/pages/portfolio-selector/versions/version-two/atacysami-v2.routes)
 *
 * 2) Rozwiń tablicę w routes PRZED trasą { path: '**', ... }:
 *      export const routes: Routes = [
 *        // ...istniejące trasy (portfolio, selektor, wersja 1)...
 *        ...ATACYSAMI_V2_ROUTES,
 *        { path: '**', redirectTo: '' }
 *      ];
 *
 * 3) W kafelku selektora „Wersja 2 (Błękitna)" ustaw przejście na '/atacysami-v2'
 *    (np. this.router.navigate(['/atacysami-v2']) lub routerLink="/atacysami-v2").
 *
 * 4) W app.component.html header portfolio musi być ukryty także dla v2:
 *      <app-header *ngIf="pokazLayout"></app-header>
 *    a w app.component.ts warunek powinien obejmować oba prefiksy, np.:
 *      this.pokazLayout = !this.router.url.startsWith('/atacysami');
 *    ('/atacysami' złapie zarówno '/atacysami', jak i '/atacysami-v2').
 *
 * Wszystkie podstrony są dziećmi wspólnego layoutu (nawigacja + stopka
 * stowarzyszenia) z animacją przejść, więc sekcja działa jak osobny serwis.
 */
export const ATACYSAMI_V2_ROUTES: Routes = [
  {
    path: 'atacysami-v2',
    loadComponent: () =>
      import('./atacysami-layout.component').then(m => m.AtacysamiLayoutComponent),
    children: [
      { path: '', redirectTo: 'o-nas', pathMatch: 'full' },
      {
        path: 'o-nas',
        loadComponent: () => import('./strony/o-nas/o-nas.component').then(m => m.ONasComponent)
      },
      {
        path: 'statut',
        loadComponent: () => import('./strony/statut/statut.component').then(m => m.StatutComponent)
      },
      {
        path: 'wladze',
        loadComponent: () => import('./strony/wladze/wladze.component').then(m => m.WladzeComponent)
      },
      {
        path: 'partnerzy',
        loadComponent: () => import('./strony/partnerzy/partnerzy.component').then(m => m.PartnerzyComponent)
      },
      {
        // Lista sprawozdań z pobieraniem plików PDF (bez osobnych stron rocznych)
        path: 'sprawozdania',
        loadComponent: () => import('./strony/sprawozdania/sprawozdania.component').then(m => m.SprawozdaniaComponent)
      }
    ]
  }
];
