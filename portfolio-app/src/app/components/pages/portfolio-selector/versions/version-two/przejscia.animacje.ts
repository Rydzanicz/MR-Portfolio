import {
  trigger,
  transition,
  style,
  query,
  animate,
  group
} from '@angular/animations';

/**
 * Animacja przejścia między podstronami stowarzyszenia „A Tacy Sami".
 * Motyw błękitny/latawce: nowa strona delikatnie „wzlatuje" —
 * pojawia się z lekkim uniesieniem i rozjaśnieniem, stara znika płynnie.
 *
 * Użycie:
 *  - w komponencie layoutu dodaj: animations: [przejscieStron]
 *  - owiń <router-outlet> elementem z [@przejscieStron]="..."
 */
export const przejscieStron = trigger('przejscieStron', [
  transition('* <=> *', [
    // ustaw obie strony jedna na drugiej
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ], { optional: true }),

    // stan początkowy wchodzącej strony — lekko niżej i przezroczysta
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(24px)' })
    ], { optional: true }),

    group([
      // stara strona: znika i lekko opada
      query(':leave', [
        animate('280ms ease',
          style({ opacity: 0, transform: 'translateY(-16px)' }))
      ], { optional: true }),

      // nowa strona: „wzlatuje" i się rozjaśnia
      query(':enter', [
        animate('420ms 120ms cubic-bezier(.22,.61,.36,1)',
          style({ opacity: 1, transform: 'translateY(0)' }))
      ], { optional: true })
    ])
  ])
]);
