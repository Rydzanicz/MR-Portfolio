import { Component } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {TranslatePipe} from "../../pipes/translate.pipe";

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
  currentLang = 'pl';

  constructor(private translationService: TranslationService) {}

  switchLanguage(lang: string) {
    this.currentLang = lang;
    this.translationService.setLanguage(lang);
  }
}
