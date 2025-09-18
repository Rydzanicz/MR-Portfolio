import { Injectable } from '@angular/core';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root'
})
export class PdfGeneratorService {

  async generateCV(cvData: any, language: string) {
    const element = document.getElementById('cv-content');

    if (!element) return;

    try {
      // Ukryj przyciski przed generowaniem
      this.hideButtons();

      const canvas = await html2canvas(element, {
        useCORS: true,
        allowTaint: true,
        scale: 2,
        backgroundColor: '#ffffff'
      });

      const imgData = canvas.toDataURL('image/png', 1.0);
      const pdf = new jsPDF.jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const pdfWidth = 210;
      const pdfHeight = 297;
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const ratio = canvasWidth / canvasHeight;

      let imgWidth = pdfWidth;
      let imgHeight = imgWidth / ratio;

      if (imgHeight > pdfHeight) {
        imgHeight = pdfHeight;
        imgWidth = imgHeight * ratio;
      }

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

      const fileName = language === 'pl' ?
          'Michal_Rydzanicz_CV_PL.pdf' :
          'Michal_Rydzanicz_CV_EN.pdf';

      pdf.save(fileName);

    } catch (error) {
      console.error('Błąd podczas generowania PDF:', error);
    } finally {
      // Pokaż ponownie przyciski
      this.showButtons();
    }
  }

  private hideButtons() {
    const buttons = document.querySelectorAll('.download-btn, .download-section');
    buttons.forEach(btn => (btn as HTMLElement).style.display = 'none');
  }

  private showButtons() {
    const buttons = document.querySelectorAll('.download-btn, .download-section');
    buttons.forEach(btn => (btn as HTMLElement).style.display = '');
  }
}
