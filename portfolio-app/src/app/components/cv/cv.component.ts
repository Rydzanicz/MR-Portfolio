import {Component, ElementRef, ViewChild, OnDestroy} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Subscription} from 'rxjs';
import {PdfService} from '../../services/pdf.service';
import {NotificationService} from '../../services/NotificationService';
import {Language, Translation, TranslationService} from '../../services/TranslationService';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnDestroy {
  @ViewChild('cvContent') cvContent?: ElementRef;

  isGeneratingPdf = false;
  currentLanguage: Language = 'pl';
  translation: Translation;
  private subscription: Subscription;
  isMobile: boolean = false;

  constructor(
    private notificationService: NotificationService,
    private pdfService: PdfService,
    private translationService: TranslationService
  ) {
    this.translation = this.translationService.getTranslation();
    this.subscription = this.translationService.currentLanguage$.subscribe(
      (lang: Language) => {
        this.currentLanguage = lang;
        this.translation = this.translationService.getTranslation();
      }
    );
    this.checkScreenSize();
    window.addEventListener('resize', () => this.checkScreenSize());
    const savedLanguage = window.localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      this.currentLanguage = savedLanguage as Language;
      this.translationService.setLanguage(this.currentLanguage);
      this.translation = this.translationService.getTranslation();
    }
  }

  checkScreenSize(): void {
    this.isMobile = window.innerWidth <= 768;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  toggleLanguage(): void {
    this.translationService.toggleLanguage();
  }

  async downloadPDF(): Promise<void> {
    this.isGeneratingPdf = true;

    try {
      if (!this.cvContent?.nativeElement) {
        throw new Error('Brak referencji do elementu cvContent!');
      }
      const filename = this.currentLanguage === 'pl'
        ? 'Michal_Rydzanicz_CV_PL.pdf'
        : 'Michal_Rydzanicz_CV_EN.pdf';

      await this.pdfService.generatePDF(this.cvContent.nativeElement, filename);
      this.notificationService.showNotification(this.translation.pdfSuccess, 'success');
    } catch (error) {
      console.error('Błąd podczas generowania PDF:', error);
      this.notificationService.showNotification(this.translation.pdfError, 'error');
    } finally {
      this.isGeneratingPdf = false;
      window.localStorage.setItem('selectedLanguage', this.currentLanguage);
      window.location.reload();
    }
  }

  getDownloadButtonText(): string {
    if (this.isGeneratingPdf) {
      return `<i class="fas fa-spinner fa-spin"></i> ${this.translation.generatingPdf}`;
    }
    return `<i class="fas fa-download"></i> ${this.translation.downloadPdf}`;
  }
}
