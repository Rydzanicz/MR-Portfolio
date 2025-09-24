import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

interface Project {
  id: string;
  company: string;
  period: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  images: string[];
  achievements: string[];
  link?: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  activeProject = 'goldentag';
  selectedImage: string | null = null;

  projects: Project[] = [
    {
      id: 'cinkciarz',
      company: 'Cinkciarz.pl',
      period: '2021 - 2024',
      title: 'Platforma Bankowa i Pożyczkowa',
      description: 'Kompleksowa platforma finansowa oferująca usługi bankowe, pożyczki oraz wymianę walut. System obsługuje tysiące użytkowników dziennie.',
      technologies: ['Java 19', 'Spring Boot', 'Angular 18', 'PostgreSQL', 'REST API', 'Microservices', 'Docker', 'GCP'],
      features: [
        'Automatyczne harmonogramy spłat',
        'System nadpłat i dystrybucji zobowiązań',
        'Panel administracyjny',
        'Integracja z systemami płatności',
        'Moduł raportowania',
        'API do komunikacji z bankami',
        'System powiadomień SMS/Email',
        'Zarządzanie kontami użytkowników'
      ],
      images: [
        'assets/cinkciarz/strona.jpg',
        'assets/cinkciarz/loans.jpg',
        'assets/cinkciarz/apk.jpg'
      ],
      achievements: [
        'Wdrożono pożyczek wielomiesięcznych',
        'Wdrożono automatyzację procesów spłat z poczekalni pożyczki',
        'Stworzenie mechanizmów generowania automatycznych harmonogramów',
        'Stworzenie komunikacji z BIK',
        'Zoptymalizowano projekt do współpracy z zespołem mobilnym',
        'Obsługa ponad 10,000 aktywnych użytkowników'
      ],
      link: 'https://cinkciarz.pl'
    },
    {
      id: 'goldentag',
      company: 'GoldenTag.pl',
      period: '2025 - 2025',
      title: 'E-commerce i System Zarządzania',
      description: 'Nowoczesna platforma e-commerce z zaawansowanym systemem zarządzania produktami, zamówieniami i klientami.',
      technologies: ['Java 21', 'Spring Boot', 'Angular 19', 'PostgreSQL', 'REST API',  'Docker', 'GCP'],
      features: [
        'Katalog produktów z dostosowaniem indywidualnego tekstu',
        'Koszyk i proces checkout',
        'Panel zarządzania zamówieniami',
        'System płatności online',
        'Automatyzacja procesu faktur',
        'Analytics i raporty sprzedaży',
        'Integracja z kurierami'
      ],
      images: [
        'assets/goldenTag/home.jpg',
        'assets/goldenTag/shop.jpg',
        'assets/goldenTag/mail.jpg',
      ],
      achievements: [
        'Integracja z Inpost',
        'Integracja z płatnościmi online'
      ],
      link: 'https://goldentag.pl'
    }
  ];

  get currentProject(): Project {
    return this.projects.find(p => p.id === this.activeProject) || this.projects[0];
  }

  selectProject(projectId: string): void {
    this.activeProject = projectId;
  }

  openImage(imageUrl: string): void {
    this.selectedImage = imageUrl;
  }

  closeImage(): void {
    this.selectedImage = null;
  }
}
