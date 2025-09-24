import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {TranslatePipe} from "../../pipes/translate.pipe";
import {TranslationService} from '../../services/TranslationService';
import {BehaviorSubject} from 'rxjs';

export type Language = 'pl' | 'en';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  imports: [
    RouterLink,
    RouterLinkActive,
    TranslatePipe
  ],
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  private currentLanguage = new BehaviorSubject<Language>('pl');
  currentLanguage$ = this.currentLanguage.asObservable();

  constructor(private translationService: TranslationService) {
  }

  switchLanguage(lang: string) {
    const newLang: Language = this.currentLanguage.value === 'pl' ? 'en' : 'pl';

    this.translationService.setLanguage(newLang);
  }
}
