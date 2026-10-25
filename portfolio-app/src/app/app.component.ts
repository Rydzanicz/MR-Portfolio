import {
  Component,
  DestroyRef,
  PLATFORM_ID,
  inject
} from '@angular/core';

import {
  CommonModule,
  isPlatformBrowser
} from '@angular/common';

import {
  RouterOutlet,
  Router,
  NavigationStart,
  NavigationEnd
} from '@angular/router';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio-app';
  pokazLayout = true;

  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  private readonly platformId = inject(PLATFORM_ID);

  constructor() {
    this.router.events
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(event => {
        if (
          event instanceof NavigationStart &&
          isPlatformBrowser(this.platformId)
        ) {
          const targetPath = event.url.split(/[?#]/)[0];

          if (targetPath === '/portfolio') {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'instant'
            });
          }
        }

        if (event instanceof NavigationEnd) {
          this.pokazLayout =
            !event.urlAfterRedirects.startsWith('/atacysami');
        }
      });
  }
}
