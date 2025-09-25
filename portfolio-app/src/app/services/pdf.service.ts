import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor() {}

  async generatePDF(element: HTMLElement, filename: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const elementsToHide = document.querySelectorAll<HTMLElement>(
        '.download-btn, .download-section, .language-switcher'
      );
      elementsToHide.forEach(el => el.style.display = 'none');

      const options = {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        width: element.offsetWidth,
        height: element.offsetHeight,
        onclone: (clonedDoc: Document) => {
          const elementsToRemove = clonedDoc.querySelectorAll(
            '.download-btn, .download-section, button, .language-switcher'
          );
          elementsToRemove.forEach(el => el.remove());

          const clonedContainer = clonedDoc.getElementById('cv-content');
          if (clonedContainer) {
            clonedContainer.style.fontFamily = '"Open Sans", "Montserrat", Arial, sans-serif';
          }
        }
      };

      html2canvas(element, options).then(canvas => {
        const imgData = canvas.toDataURL('image/png', 1.0);
        const pdf = new jsPDF({
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

        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight, '', 'FAST');
        pdf.save(filename);
        resolve();
      }).catch(error => {
        reject(error);
      });
    });
  }
}
