import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Responsibility {
  title: string;
  description: string;
}

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
  myResponsibilities?: Responsibility[];
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

      technologies: [
        'Java 17',
        'Spring Boot',
        'Angular 18',
        'PostgreSQL',
        'REST API',
        'Microservices',
        'Docker',
        'GCP'
      ],

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
        'Wdrożono pożyczki wielomiesięczne',
        'Wdrożono automatyzację procesów spłat z poczekalni pożyczki',
        'Stworzono mechanizmy generowania automatycznych harmonogramów',
        'Zoptymalizowano projekt do współpracy z zespołem mobilnym',
        'Obsługa ponad 10 000 aktywnych użytkowników'
      ],
myResponsibilities: [
  {
    title: 'Frontend',
    description:
      'Przebudowa interfejsu użytkownika zgodnie z nowym wyglądem aplikacji'
  },
  {
    title: 'Backend',
    description:
      'Tworzenie logiki backendowej obsługującej nowe funkcjonalności interfejsu'
  },
  {
    title: 'Developer',
    description:
      'Diagnozowanie i poprawianie błędów w aplikacji'
  },
  {
    title: 'Frontend',
    description:
      'Rozwój interfejsu systemowego i wdrażanie nowych funkcjonalności'
  },
  {
    title: 'Backend',
    description:
      'Automatyzacja generowania dokumentów i ich wysyłki do klientów'
  }
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

      technologies: [
        'Java 21',
        'Spring Boot',
        'Angular 19',
        'PostgreSQL',
        'REST API',
        'Docker',
        'GCP'
      ],

      features: [
        'Katalog produktów z dostosowaniem indywidualnego tekstu',
        'Koszyk i proces checkout',
        'Panel zarządzania zamówieniami',
        'System płatności online',
        'Automatyzacja fakturowania',
        'Analityka i raporty sprzedaży',
        'Integracja z kurierami'
      ],

      images: [
        'assets/images/goldenTag/home.png',
        'assets/images/goldenTag/shop.png',
        'assets/images/goldenTag/mail.jpg'
      ],

      achievements: [
        'Integracja z InPost',
        'Integracja z płatnościami online',
        'Automatyzacja wysyłki wiadomości e-mail i fakturowania'
      ],
    myResponsibilities: [
      {
        title: 'Pomysłodawca',
        description:
          'Opracowanie pomysłu na produkt i koncepcji jego sprzedaży online'
      },
      {
        title: 'Developer',
        description:
          'Samodzielne stworzenie sklepu internetowego wraz z backendem i interfejsem użytkownika'
      },
      {
        title: 'Developer',
        description:
          'Wdrożenie personalizacji produktów, koszyka, obsługi zamówień i panelu administracyjnego'
      },
      {
        title: 'Integrator',
        description:
          'Integracja sklepu z płatnościami online i usługami kurierskimi'
      },
      {
        title: 'Developer',
        description:
          'Automatyzacja obsługi zamówień, fakturowania i wysyłki wiadomości do klientów'
      },
      {
        title: 'Twórca',
        description:
          'Weryfikacja produktu w fazie testów i podjęcie decyzji o zakończeniu projektu na podstawie ich wyników'
      }
    ],
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

      technologies: [
        'Java 21',
        'Spring Boot',
        'Angular 19',
        'REST API',
        'SOAP',
        'Apache Kafka',
        'PostgreSQL',
        'Docker'
      ],

      features: [
        'Automatyczne przesyłanie danych do systemu firmy zewnętrznej',
        'Komunikacja REST i SOAP z systemami partnerskimi',
        'Asynchroniczna wymiana danych przez Apache Kafka',
        'Monitorowanie i obsługa błędów w czasie rzeczywistym'
      ],

      images: [
        'assets/images/CA/home.jpg',
        'assets/images/CA/shop.jpg'
      ],

      achievements: [
        // facade i PP-generic
        'Zintegrowanie dwa niezależne systemy backendowe z wieloma aplikacjami frontendowymi',
        'Zautomatyzowanie wymianę danych z systemem podmiotu zewnętrznego',
        'Wdrożonie komunikację międzysystemową z wykorzystaniem REST API, SOAP oraz Apache Kafka',
        'Zbudowanie od podstaw nową aplikację w trybie pilnym, dzień przed planowanym wydaniem, w odpowiedzi na krytyczne potrzeby wdrożeniowe'

        // Kolega miał własną wizję projektu, ale nie potrafił jej sprzedać ani wytłumaczyć.
        // Dzień przed wydaniem przejąłem projekt i napisałem wszystkie podstawowe
        // funkcjonalności w prosty i zrozumiały sposób.
        // Od tego momentu prowadzę prace nad dwoma projektami jednocześnie.
      ],

      myResponsibilities: [
        {
          title: 'Developer',
          description:
          'Utrzymanie i rozwój istniejącego systemu opartego na Java i Spring'
        },
        {
          title: 'Developer',
          description:
          'Tworzenie nowego systemu równolegle w trzech projektach i dostosowywanie prac do bieżących priorytetów'
        },
        {
          title: 'Developer',
          description:
          'Wdrażanie pracowników do pracy z nowym systemem poprzez całościowe wyjaśnienie jego działania oraz udzielanie propozycji zakresu testów aplikacji'
        },
        {
          title: 'Developer',
          description:
          'Dostosowywanie funkcjonalności systemów do zmieniających się wymagań biznesowych i ograniczeń po stronie systemu zewnętrznego'
        },
        {
          title: 'Developer',
          description:
          'Analiza zgłoszonych błędów i uwag oraz ich samodzielna realizacja lub przekazywanie do odpowiednich osób w zespole, w zależności od aktualnego podziału prac'
          //napraw lub odrzucenie błędów które są niezgodne z aktualnym projketem bo on jest płynny
        },
        {
          title: 'Developer',
          description:
          'Rozdzielanie pracy w trzech serwisach tworzących jeden proces: integracji z systemem zewnętrznym, zapisu danych w bazie i komunikacji przez Apache Kafka'
          // facade — pobiera dane z wielu systemów.
          // PP-generic — baza danych.
          // PP-kafka — pobiera dane i zapisuje je do bazy danych.
        },
        {
          title: 'Analityk',
          description:
          'Współpraca z zespołami zewnętrznymi, prezentowanie działania systemu i zbieranie uwag dotyczących jego rozwoju'
            // 1 linia ataku zespółow zewnetrznbych. To ja odpowiadam na pytania
        },

        {
          title: 'Analityk',
          description:
            'Analiza architektury i działania istniejącego systemu oraz tworzenie dokumentacji technicznej w Confluence'
        },
        {
          title: 'Analityk',
          description:
            'Tworzenie dodatkowej, szczegółowej dokumentacji działania systemu z wykorzystaniem narzędzi AI'
        }
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
        'Zapewnienie przejrzystości dokumentacji oraz wsparcia technicznego dla fundacji.'
      ],

      technologies: [
        'Java 21+',
        'Spring Boot',
        'Angular 19+'
      ],

      features: [
        'Pobieranie plików ze sprawozdaniami',
        'Przejrzysty dostęp do dokumentacji'
      ],

      images: [
        'assets/images/ATS/logo.jpg'
      ],

      achievements: [
        'Udostępniono pliki ze sprawozdaniami do pobrania',
        'Zapewniono przejrzysty dostęp do dokumentacji'
      ],

      link: 'https://a-tacy-sami.lm.r.appspot.com/atacysami/o-nas'
    }
  ];

  get currentProject(): Project {
    return (
      this.projects.find(project => project.id === this.activeProject)
      || this.projects[0]
    );
  }

  get currentResponsibilities(): Responsibility[] {
    return (this.currentProject.myResponsibilities ?? [])
      .map(responsibility => ({
        title: responsibility.title.trim(),
        description: responsibility.description.trim()
      }))
      .filter(responsibility => responsibility.description.length > 0);
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
  onResize(): void {
    if (this.isDesktop()) {
      this.hoveredSegment = null;
    }
  }
}
