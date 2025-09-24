import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
      profileDescription: 'Doświadczony full-stack developer z ponad 3-letnim doświadczeniem w branży IT. Specjalizuję się w projektowaniu i wdrażaniu rozwiązań Java/Spring oraz tworzeniu nowoczesnych interfejsów Angular. Mam doświadczenie w automatyzacji procesów biznesowych oraz optymalizacji wydajności systemów. Poszukuję nowych wyzwań technologicznych w środowisku, które ceni innowacyjność i rozwój.',
      skillsList: [
        'Java 21+',
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
        'Scram, JIRA',
        'Clean code, DDD, DRY',
        'Umiejętność szybkiego uczenia się w nowych technologiach',
        'Praca zespołowa i komunikacja w zespole',
        'Umiejętność korzystania z AI w codziennej pracy'
      ],
      languagesList: [
        { name: 'Polski', level: 'Ojczysty' },
        { name: 'Angielski', level: 'B1 / B2' }
      ],
      additionalList: [
        { icon: 'fas fa-car', text: 'Prawo jazdy kat. A i B' },
        { icon: 'fas fa-map-marked-alt', text: 'Gotowość do relokacji' }
      ],
      experienceList: [
        {
          company: 'Fullstack',
          period: 'styczeń 2025 – obecnie',
          title: 'Full-Stack Developer',
          location: 'Wrocław',
          achievements: [
            'Rozwój aplikacji webowych z wykorzystaniem Angular i Spring',
            'Implementacja rozwiązań automatyzacji procesów',
            'Projektowanie interfejsów użytkownika',
            'Integracja API systemów płatności i mailowych'
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
          degree: 'Dyplom ukończenia studiów technicznych',
          details: [
            'Przewodniczący koła naukowego (organizacja dni otwartych, warsztatów, wydarzeń technologicznych)',
            'Rozwijanie umiejętności w Java, Kotlin, Spring, SQL, Angular',
            'Aktywna praca w zespołach projektowych, metodyki Agile/Scrum'
          ]
        }
      ],
      projectsList: [
        'Rozwój narzędzi automatyzujących procesy biznesowe (Java, Spring, Angular)',
        'Projekty dostępne na GitHub: github.com/Rydzanicz'
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
      profileDescription: 'Experienced full-stack developer with over 3 years of experience in the IT industry. I specialize in designing and implementing Java/Spring solutions and creating modern Angular interfaces. I have experience in business process automation and system performance optimization. I am looking for new technological challenges in an environment that values innovation and development.',
      skillsList: [
        'Java 21+',
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
        'Scram, JIRA',
        'Clean code, DDD, DRY',
        'Ability to quickly learn new technologies',
        'Teamwork and team communication skills',
        'Ability to use AI in daily work'
      ],
      languagesList: [
        { name: 'Polish', level: 'Native' },
        { name: 'English', level: 'B1 / B2' }
      ],
      additionalList: [
        { icon: 'fas fa-car', text: 'Driving license cat. A and B' },
        { icon: 'fas fa-map-marked-alt', text: 'Willingness to relocate' }
      ],
      experienceList: [
        {
          company: 'Fullstack',
          period: 'January 2025 – present',
          title: 'Full-Stack Developer',
          location: 'Wrocław',
          achievements: [
            'Development of web applications using Angular and Spring',
            'Implementation of process automation solutions',
            'User interface design',
            'Integration of payment and mail system APIs'
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
          degree: 'Technical Studies Completion Diploma',
          details: [
            'Chairman of the scientific club (organizing open days, workshops, technological events)',
            'Developing skills in Java, Kotlin, Spring, SQL, Angular',
            'Active work in project teams, Agile/Scrum methodologies'
          ]
        }
      ],
      projectsList: [
        'Development of business process automation tools (Java, Spring, Angular)',
        'Projects available on GitHub: github.com/Rydzanicz'
      ]
    }
  };

  constructor() {}

  getCurrentLanguage(): Language {
    return this.currentLanguage.value;
  }

  setLanguage(lang: Language): void {
    this.currentLanguage.next(lang);
  }

  getTranslation(): Translation {
    return this.translations[this.currentLanguage.value];
  }

  getTranslationByKey(key: keyof Translation): string {
    const value = this.translations[this.currentLanguage.value][key];
    return typeof value === 'string' ? value : '';
  }

  toggleLanguage(): void {
    const newLang: Language = this.currentLanguage.value === 'pl' ? 'en' : 'pl';
    this.setLanguage(newLang);
  }
}
