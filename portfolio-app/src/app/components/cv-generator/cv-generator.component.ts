import { Component, AfterViewInit } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-cv-generator',
  templateUrl: './cv-generator.component.html',
  imports: [
    NgForOf
  ],
  styleUrls: ['./cv-generator.component.scss']
})
export class CvGeneratorComponent implements AfterViewInit {

  // Przykładowe dane (rozszerzaj wg potrzeb)
  workExperiences = [
    {
      companyName: 'Fullstack',
      jobPeriod: 'styczeń 2025 – obecnie',
      jobTitle: 'Full-Stack Developer',
      jobLocation: 'Wrocław',
      achievements: [
        'Rozwój aplikacji webowych z wykorzystaniem Angular i Spring',
        'Implementacja rozwiązań automatyzacji procesów',
        'Projektowanie interfejsów użytkownika',
        'Integracja API systemów płatności i mailowych',
      ]
    },
    {
      companyName: 'Cinkciarz.pl',
      jobPeriod: 'czerwiec 2021 – grudzień 2024',
      jobTitle: 'Full-Stack Developer',
      jobLocation: 'Zielona Góra',
      achievements: [
        'Tworzenie innowacyjnych narzędzi bankowych i pożyczkowych',
        'Implementacja automatycznych harmonogramów spłat',
        'Optymalizacja kodu i wydajności systemów',
        'Rozwój interfejsów użytkownika w Angular',
        'Integracja frontendu z backendem',
        'Praca z Docker, GCP, GIT',
      ]
    }
  ];

  ngAfterViewInit(): void {
    // Możesz dodać inicjalizację po załadowaniu widoku jeśli potrzebna
  }

  // Metoda generująca PDF z zawartości CV
  downloadPDF(): void {
    const element = document.getElementById('cv-content');
    if (!element) {
      console.error('Element z CV nie został znaleziony');
      return;
    }
    html2canvas(element).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgProps = (pdf as any).getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('cv.pdf');
    });
  }
}
