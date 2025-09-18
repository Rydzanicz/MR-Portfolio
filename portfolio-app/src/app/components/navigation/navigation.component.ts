import { Component } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  currentLang = 'pl';

  constructor(private translationService: TranslationService) {}

  switchLanguage(lang: string) {
    this.currentLang = lang;
    this.translationService.setLanguage(lang);
  }
}
