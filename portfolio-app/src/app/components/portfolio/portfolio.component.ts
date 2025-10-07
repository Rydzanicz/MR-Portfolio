import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

interface Project {
  id: string;
  company: string;
  period: string;
  title: string;
  descriptionPoints: string[];
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
  hoveredSegment: number | null = null;

  projects: Project[] = [
    {
      id: 'cinkciarz',
      company: 'Cinkciarz.pl',
      period: '2021 - 2024',
      title: 'Platforma Bankowa i Pożyczkowa',
      descriptionPoints: [
        'W projekcie zajmowałem się utrzymaniem kluczowego projektu firmy, czyli pożyczek. Polegało to na monitorowaniu GCP i raportowaniu błędów z logów dla kilku mikroserwisów jednocześnie.',
        'Tworzyłem nowoczesny interfejs użytkownika dla pożyczek wielomiesięcznych.',
        'Optymalizowałem backend oraz tworzyłem REST API do połączenia z nową funkcjonalnością we współpracy z zespołem mobilnym.',
        'Optymalizowałem raporty dla księgowości.'
      ],
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
        'assets/images/cinkciarz/strona.jpg',
        'assets/images/cinkciarz/loans.jpg',
        'assets/images/cinkciarz/apk.jpg'
      ],
      achievements: [
        'Wdrożono pożyczek wielomiesięcznych',
        'Wdrożono automatyzację procesów spłat z poczekalni pożyczki',
        'Stworzenie mechanizmów generowania automatycznych harmonogramów',
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
      descriptionPoints: [
        'Stworzyłem nowoczesną platformę e-commerce z zaawansowanym systemem personalizacji produktów.',
        'Zrealizowałem integracje z firmami kurierskimi, procesy checkout oraz system płatności online.',
        'Zautomatyzowałem proces fakturowania oraz zarządzanie zamówieniami w panelu administratora.'
      ],

      technologies: ['Java 21', 'Spring Boot', 'Angular 19', 'PostgreSQL', 'REST API', 'Docker', 'GCP'],
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
        'assets/images/goldenTag/home.jpg',
        'assets/images/goldenTag/shop.jpg',
        'assets/images/goldenTag/mail.jpg',
      ],
      achievements: [
        'Integracja z Inpost',
        'Integracja z płatnościmi online',
        "Automatyzacja maili i fakturowania"
      ],
      link: 'https://goldentag.pl'
    },
    {
      id: 'WWart',
      company: 'WWart.store',
      period: '2025 - 2025',
      title: 'E-commerce i System wysłaniam mail z eBookiem',
      descriptionPoints: [
        'Stworzyłem nowoczesną platformę e-commerce z zaawansowanym systemem wysyłki maili z fakturą oraz z eBookiem.',
        'Zrealizowałem integracje z firmami kurierskimi, procesy checkout oraz system płatności online.'
      ],

      technologies: ['Java 21', 'Spring Boot', 'Angular 19', 'PostgreSQL', 'REST API', 'Docker', 'GCP'],
      features: [
        'Katalog produktów ',
        'Koszyk i proces checkout',
        'System płatności online',
        'Automatyzacja procesu faktur',
        'Analytics i raporty sprzedaży',
        'Integracja z kurierami'
      ],
      images: [
        'assets/images/WWart/home.jpg',
        'assets/images/WWart/shop.jpg',
        'assets/images/WWart/mail.jpg',
      ],
      achievements: [
        'Integracja z Inpost',
        'Integracja z płatnościmi online',
        "Automatyzacja maili i fakturowania i Ebookami"
      ]
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
