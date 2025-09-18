import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguageSubject = new BehaviorSubject<string>('pl');
  public currentLanguage$ = this.currentLanguageSubject.asObservable();

  private translations: any = {};

  constructor(private http: HttpClient) {
    this.loadTranslations('pl');
  }

  setLanguage(lang: string) {
    this.currentLanguageSubject.next(lang);
    this.loadTranslations(lang);
  }

  private loadTranslations(lang: string) {
    this.http.get(`/assets/i18n/messages.${lang}.json`)
      .subscribe(translations => {
        this.translations = translations;
      });
  }

  getTranslation(key: string): string {
    return this.translations[key] || key;
  }
}
