import {Component, HostListener} from '@angular/core';
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
  activeProject = 'creditAgricole';
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
      technologies: ['Java 17', 'Spring Boot', 'Angular 18', 'PostgreSQL', 'REST API', 'Microservices', 'Docker', 'GCP'],
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
      period: '2025 - 2026',
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
        'assets/images/goldenTag/home.png',
        'assets/images/goldenTag/shop.png',
        'assets/images/goldenTag/mail.jpg',
      ],
      achievements: [
        'Integracja z Inpost',
        'Integracja z płatnościmi online',
        "Automatyzacja maili i fakturowania"
      ]
    },
    {
      id: 'creditAgricole',
      company: 'Crédit Agricole',
      period: '2026 - obecnie',
      title: 'Integracja Systemów Bankowych i Komunikacja Międzysystemowa',
      descriptionPoints: [
        'Wdrożyłem nową funkcjonalność łączącą frontend z dwoma niezależnymi backendami, które pobierają dane z różnych źródeł.',
        'Zaprojektowałem przepływ, w którym zebrane dane są automatycznie przesyłane do systemu firmy zewnętrznej.',
        'Zaimplementowałem komunikację międzysystemową z wykorzystaniem REST, SOAP oraz Apache Kafka, zapewniając wysoką wydajność i odporność na błędy.'
      ],
      technologies: ['Java 21', 'Spring Boot', 'Angular 19', 'REST API', 'SOAP', 'Apache Kafka', 'PostgreSQL', 'Docker'],
      features: [
        'Integracja frontendu z dwoma niezależnymi backendami',
        'Automatyczne przesyłanie danych do systemu firmy zewnętrznej',
        'Komunikacja REST i SOAP z systemami partnerskimi',
        'Asynchroniczna wymiana danych przez Apache Kafka',
        'Monitorowanie i obsługa błędów w czasie rzeczywistym'
      ],
      images: [
        'assets/images/CA/home.jpg',
        'assets/images/CA/shop.jpg',
      ],
      achievements: [
        'Zintegrowano dwa niezależne backendy z jednym frontendem',
        'Wdrożono automatyczną wymianę danych z podmiotem zewnętrznym',
        'Wprowadzono wielokanałową komunikację REST/SOAP/Kafka'
      ],
      link: 'https://www.credit-agricole.pl/klienci-indywidualni'
    },
    {
      id: 'ATS',
      company: 'A Tacy Sami',
      period: '2026 - 2026',
      title: 'Strona internetowa Fundacji "A Tacy Sami"',
      descriptionPoints: [
        'Wspomaganie działalności fundacji "A Tacy Sami" w zakresie strony internetowej.',
        'Przejzystosc dokumatacji oraz wsparcie techniczne dla fundacji.'
      ],
      technologies: ['Java 21+', 'Spring Boot', 'Angular 19+'],
      features: [
        'Pobieranie plików z wsprawozadaniemi',
        'Przejzystaoć do dokumentacji'
      ],
      images: [
        'assets/images/ATS/logo.jpg'
      ],
      achievements: [
        'Pobieranie plików z wsprawozadaniemi',
        'Przejzystaoć do dokumentacji'
      ],
      link: '/portfolio-selector'
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

  isMobile(): boolean {
    return window.innerWidth <= 768;
  }

  isDesktop(): boolean {
    return !this.isMobile();
  }

  @HostListener('window:resize')
  onResize() {
    if (this.isDesktop()) {
      this.hoveredSegment = null;
    }
  }
}
