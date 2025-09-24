import { Pipe, PipeTransform } from '@angular/core';
import {Translation, TranslationService} from '../services/TranslationService';

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {
  constructor(private translationService: TranslationService) {}

  transform(key: keyof Translation): string {
    return this.translationService.getTranslationByKey(key);
  }

}
