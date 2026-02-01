import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export type Language = 'pl' | 'en';

export interface Translation {
  contact: string;
  skills: string;
  languages: string;
  additional: string;
  profile: string;
  experience: string;
  education: string;
  projects: string;
  downloadPdf: string;
  generatingPdf: string;
  pdfSuccess: string;
  pdfError: string;
  currentPosition: string;
  profileDescription: string;
  skillsList: string[];
  languagesList: { name: string; level: string }[];
  additionalList: { icon: string; text: string }[];
  experienceList: {
    company: string;
    period: string;
    title: string;
    location: string;
    achievements: string[];
  }[];
  educationList: {
    institution: string;
    year: string;
    degree: string;
    details: string[];
  }[];
  projectsList: string[];
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguage = new BehaviorSubject<Language>('pl');
  currentLanguage$ = this.currentLanguage.asObservable();

  private translations: Record<Language, Translation> = {
    pl: {
      contact: 'KONTAKT',
      skills: 'UMIEJĘTNOŚCI',
      languages: 'JĘZYKI',
      additional: 'DODATKOWE',
      profile: 'PROFIL',
      experience: 'DOŚWIADCZENIE ZAWODOWE',
      education: 'WYKSZTAŁCENIE',
      projects: 'PROJEKTY',
      downloadPdf: 'Pobierz PDF',
      generatingPdf: 'Generowanie PDF...',
      pdfSuccess: 'PDF został wygenerowany i pobrany pomyślnie!',
      pdfError: 'Wystąpił błąd podczas generowania PDF. Spróbuj ponownie.',
      currentPosition: 'FULL-STACK DEVELOPER',
      profileDescription: 'Doświadczony full‑stack developer z ponad 3‑letnim doświadczeniem w projektach komercyjnych. Specjalizuje się w tworzeniu aplikacji webowych w oparciu o Java/Spring na backendzie oraz Angular na frontendzie, ze szczególnym naciskiem na przejrzystą architekturę i wysoką jakość kodu. Ma praktyczne doświadczenie w automatyzacji procesów biznesowych – m.in. budowie własnego systemu sklepowego do obsługi automatycznych zamówień i wysyłki maili z powiadomieniami i fakturami. Szuka nowych wyzwań technologicznych w środowisku, które ceni odpowiedzialność end‑to‑end za produkt, możliwość wpływu na rozwiązania oraz ciągły rozwój kompetencji.',
      skillsList: [
        'Java 17+',
        'Spring Framework',
        'REST WebServices',
        'Angular 19',
        'MySQL',
        'PostgreSQL',
        'Hibernate',
        'Docker',
        'GCP',
        'Jenkins',
        'Git',
        'Junit, Mockito, Cucumber',
        'Scram, JIRA, Confluence',
        'SOLID, DDD',
        'Umiejętność szybkiego uczenia się w nowych technologiach',
        'Umiejętność analitycznego myślenia oraz pracy w zespole',
        'Umiejętność korzystania z AI w codziennej pracy'
      ],
      languagesList: [
        {name: 'Polski', level: 'Ojczysty'},
        {name: 'Angielski', level: ' A2/B1'}
      ],
      additionalList: [
        {icon: 'fas fa-car', text: 'Prawo jazdy kat. A i B'},
        {icon: 'fas fa-map-marked-alt', text: 'Gotowość do relokacji'},
        {icon: 'fas fa-network-wired', text: 'Doświadczenie w diagnozowaniu problemów integracji'},
        {
          icon: 'fas fa-handshake',
          text: 'Komunikacja z zespołem technicznym integrującym się z naszym serwisem oraz codzienna komunikacja z osobami z biznesu'
        },
        {icon: 'fas fa-file-alt', text: 'Dokumentacja techniczna'},
        {icon: 'fas fa-clock', text: 'Umiejętność pracy pod presją czasu'}
      ],
      experienceList: [
        {
          company: 'Viggo Programer',
          period: 'styczeń 2025 – obecnie',
          title: 'Full-Stack Developer',
          location: 'Wrocław',
          achievements: [
            'Rozwój aplikacji webowych typu front‑end/back‑end z wykorzystaniem Angular i Spring, od projektowania po wdrożenie produkcyjne.',
            'Projektowanie interfejsów użytkownika',
            'Automatyzacja Procesu Sprawdzania statusu płatności oraz wysyłki maila z fakturą',
            'Integracja API systemów płatności',
            'Integracja API Map Inpost',
            'Integracja API Allegro'
          ]
        },
        {
          company: 'Cinkciarz.pl',
          period: 'czerwiec 2021 – grudzień 2024',
          title: 'Full-Stack Developer',
          location: 'Zielona Góra',
          achievements: [
            'Tworzenie innowacyjnych narzędzi bankowych i pożyczkowych w Java, Spring, MySQL, Rest Api i microservice',
            'Implementacja automatycznych harmonogramów spłat, systemu nadpłat i dystrybucji zobowiązań',
            'Optymalizacja kodu i wydajności systemów',
            'Rozwój interfejsów użytkownika w Angular',
            'Integracja frontendu z backendem, zapewnienie spójności i wysokiej wydajności',
            'Praca z Docker, GCP, GIT'
          ]
        }
      ],
      educationList: [
        {
          institution: 'Uniwersytet Zielonogórski',
          year: '2023',
          degree: 'Dyplom Studiów Technicznych',
          details: [
            'Kierunek: Informatyka / Inżynieria Oprogramowania',
            'Pełnienie funkcji starosty grupy przez cały okres studiów',
            'Przewodniczący koła naukowego – organizacja dni otwartych i warsztatów technologicznych',
            'Prowadzenie korepetycji z programowania i IT',
            'Aktywna praca w zespołach projektowych, metodyki Scrum'
          ]
        }
      ],
      projectsList: [
        'Rozwój narzędzi automatyzujących procesy biznesowe (Java, Spring, Angular)',
        'Projekty dostępne na GitHub: github.com/Rydzanicz',
        'Portfolio: viggoprogramer.pl',
        'Sklep: goldentag.pl'
      ]
    },
    en: {
      contact: 'CONTACT',
      skills: 'SKILLS',
      languages: 'LANGUAGES',
      additional: 'ADDITIONAL',
      profile: 'PROFILE',
      experience: 'PROFESSIONAL EXPERIENCE',
      education: 'EDUCATION',
      projects: 'PROJECTS',
      downloadPdf: 'Download PDF',
      generatingPdf: 'Generating PDF...',
      pdfSuccess: 'PDF has been generated and downloaded successfully!',
      pdfError: 'An error occurred while generating PDF. Please try again.',
      currentPosition: 'FULL-STACK DEVELOPER',
      profileDescription: 'Experienced full‑stack developer with over 3 years of commercial experience. Specializes in building web applications using Java/Spring on the backend and Angular on the frontend, with a strong focus on clean architecture and high code quality. Has hands‑on experience in automating business processes – including designing and implementing a custom e‑commerce system for handling automatic orders and sending notification and invoice emails. Currently looking for new technological challenges in an environment that values end‑to‑end ownership of the product, real influence on technical decisions, and continuous skills development.',
      skillsList: [
        'Java 17+',
        'Spring Framework',
        'REST WebServices',
        'Angular 19',
        'MySQL',
        'PostgreSQL',
        'Hibernate',
        'Docker',
        'GCP',
        'Jenkins',
        'Git',
        'Junit, Mockito, Cucumber',
        'Scram, JIRA, Confluence',
        'SOLID, DDD',
        'Ability to quickly learn and adapt to new technologies.',
        'Strong analytical thinking skills and effective teamwork.',
        'Proficient in using AI tools to support and optimize everyday work.'
      ],
      languagesList: [
        {name: 'Polish', level: 'Native'},
        {name: 'English', level: 'A2/B1'}
      ],
      additionalList: [
        {icon: 'fas fa-car', text: 'Driving license category A and B'},
        {icon: 'fas fa-map-marked-alt', text: 'Willingness to relocate'},
        {icon: 'fas fa-network-wired', text: 'Experience in diagnosing integration issues'},
        {icon: 'fas fa-database', text: 'Data analysis and audit reporting'},
        {
          icon: 'fas fa-handshake',
          text: 'Communication with the technical team integrating with our service and daily communication with business stakeholders'
        },
        {icon: 'fas fa-file-alt', text: 'Technical documentation'},
        {icon: 'fas fa-clock', text: 'Ability to work under time pressure'}
      ],
      experienceList: [
        {
          company: 'Viggo Programer',
          period: 'January 2025 – present',
          title: 'Full-Stack Developer',
          location: 'Wrocław',
          achievements: [
            'Development of end‑to‑end web applications (frontend and backend) using Angular and Spring, from initial design to production deployment.',
            'Design and implementation of user interfaces focused on clarity and usability.',
            'Automation of the process for checking payment status and sending invoice emails to customers.',
            'Integration with external payment system APIs',
            'Integration with InPost Maps API',
            'Integration with Allegro APIs'
          ]
        },
        {
          company: 'Cinkciarz.pl',
          period: 'June 2021 – December 2024',
          title: 'Full-Stack Developer',
          location: 'Zielona Góra',
          achievements: [
            'Creating innovative banking and lending tools in Java, Spring, MySQL, Rest Api and microservices',
            'Implementation of automatic repayment schedules, overpayment system and debt distribution',
            'Code and system performance optimization',
            'Development of user interfaces in Angular',
            'Frontend-backend integration, ensuring consistency and high performance',
            'Working with Docker, GCP, GIT'
          ]
        }
      ],
      educationList: [
        {
          institution: 'University of Zielona Góra',
          year: '2023',
          degree: 'Technical Studies Diploma',
          details: [
            'Field of study: Computer Science / Software Engineering',
            'Chair of scientific club – organization of open days and technology workshops',
            'Serving as class representative for the entire duration of my studies.',
            'Conducting programming and IT tutoring',
            'Active participation in project teams, Scrum methodologies'
          ]
        }
      ],
      projectsList: [
        'Development of business process automation tools (Java, Spring, Angular)',
        'Projects available on GitHub: github.com/Rydzanicz',
        'Portfolio: viggoprogramer.pl',
        'Shop: goldentag.pl'      ]
    }
  };

  constructor() {
  }

  setLanguage(lang: Language): void {
    this.currentLanguage.next(lang);
  }

  getTranslation(): Translation {
    return this.translations[this.currentLanguage.value];
  }

  toggleLanguage(): void {
    const newLang: Language = this.currentLanguage.value === 'pl' ? 'en' : 'pl';
    this.setLanguage(newLang);
  }
}
