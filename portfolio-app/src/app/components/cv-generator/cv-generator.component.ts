import { Component } from '@angular/core';
import { PdfGeneratorService } from '../../services/pdf-generator.service';
import { TranslationService } from '../../services/translation.service';

interface CVData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
  };
  summary: string;
  experience: Array<{
    company: string;
    position: string;
    period: string;
    description: string[];
  }>;
  education: Array<{
    institution: string;
    degree: string;
    period: string;
    description?: string;
  }>;
  skills: string[];
  languages: Array<{
    language: string;
    level: string;
  }>;
}

@Component({
  selector: 'app-cv-generator',
  templateUrl: './cv-generator.component.html',
  styleUrls: ['./cv-generator.component.scss']
})
export class CvGeneratorComponent {
  currentLanguage = 'pl';

  cvData: CVData = {
    personalInfo: {
      name: 'Michał Rydzanicz',
      title: 'Full-Stack Developer',
      email: 'rydzanicz.mm@gmail.com',
      phone: '48 785 640 173',
      location: 'Wrocław, 54-237',
      linkedin: 'linkedin.com/in/michał-rydzanicz-97307827b',
      github: 'github.com/Rydzanicz'
    },
    summary: 'Doświadczony full-stack developer z ponad 3-letnim doświadczeniem...',
    experience: [
      {
        company: 'Fullstack',
        position: 'Full-Stack Developer',
        period: 'styczeń 2025 – obecnie',
        description: [
          'Rozwój aplikacji webowych z wykorzystaniem Angular i Spring',
          'Implementacja rozwiązań automatyzacji procesów'
        ]
      }
    ],
    education: [
      {
        institution: 'Uniwersytet Zielonogórski',
        degree: 'Dyplom ukończenia studiów technicznych',
        period: '2023'
      }
    ],
    skills: [
      'Java 21+', 'Spring Framework', 'Angular', 'TypeScript',
      'MySQL', 'PostgreSQL', 'Docker', 'GCP', 'Jenkins', 'Git'
    ],
    languages: [
      { language: 'Polski', level: 'Ojczysty' },
      { language: 'Angielski', level: 'B1 / B2' }
    ]
  };

  constructor(
      private pdfService: PdfGeneratorService,
      private translationService: TranslationService
  ) {
    this.translationService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  downloadPDF() {
    this.pdfService.generateCV(this.cvData, this.currentLanguage);
  }
}
