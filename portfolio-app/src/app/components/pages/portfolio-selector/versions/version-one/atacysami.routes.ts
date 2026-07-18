import { Routes } from '@angular/router';

/**
 * Trasy strony stowarzyszenia „A Tacy Sami".
 *
 * Wklej całą tablicę ATACYSAMI_ROUTES do swojego głównego app.routes.ts
 * (jako jeden wpis w tablicy routes), PRZED trasą { path: '**', ... }.
 *
 * Wszystkie podstrony są dziećmi wspólnego layoutu (nawigacja + stopka
 * stowarzyszenia), więc sekcja działa jak osobny serwis.
 */
export const ATACYSAMI_ROUTES: Routes = [
  {
    path: 'atacysami',
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
        path: 'sprawozdania',
        loadComponent: () => import('./strony/sprawozdania/sprawozdania.component').then(m => m.SprawozdaniaComponent)
      },
      {
        // Jeden reużywalny komponent obsługuje wszystkie lata (2018–2025)
        path: 'sprawozdania/:rok',
        loadComponent: () => import('./strony/sprawozdanie/sprawozdanie.component').then(m => m.SprawozdanieComponent)
      }
    ]
  }
];
