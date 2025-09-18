import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Pipe({
    name: 'translate',
    pure: false // aby aktualizowało przy zmianie języka
})
export class TranslatePipe implements PipeTransform {

    constructor(private translationService: TranslationService) {}

    transform(key: string): string {
        return this.translationService.getTranslation(key);
    }
}
