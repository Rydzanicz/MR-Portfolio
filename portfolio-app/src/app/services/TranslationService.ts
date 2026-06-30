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
  field: string;
  specialty: string;
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
      currentPosition: 'Kierownik regionalny',
      profileDescription: 'Jestem młodą osobą o wysokiej kulturze i organizacji pracy. Posiadam 6-letnie doświadczenie w obsłudze klienta oraz ponad 4 lata w organizacji imprez okolicznościowych. Czas spędzony na wdrażaniu planów i realizacji pomysłów klientów pozwolił mi wykształtować zmysł mentora. Jako osoba na stanowisku kierowniczym wielokrotnie miałam okazję do współpracy, jak i zarządzania ludźmi. Cechuje mnie odpowiedzialność i gotowość do działania. Lubię szukać i adaptować rozwiązania, zwiększając efektywność i satysfakcję pozostałych pracowników.',
      skillsList: [
        'Lider Lean Manufacturing',
        'Wykorzystywanie metody SMED',
        'Stosowanie Metody 5S',
        'Myślenie lean',
        'Wdrażanie standardów obsługi, procedur pracy, harmonogramów',
         'Mapowanie strumienia wartości',
        'Balansowanie linii produkcyjnej',
        'Kontrolowanie jakości własnej pracy',
        'Prowadzenie audytów operacyjnych',
        'Umiejętność szybkiego uczenia się',
         'Umiejętności przekazywania wiedzy',
        'Praca w zespole',
        'Umiejętność korzystania z AI w codziennej pracy'

      ],
      languagesList: [
        {name: 'Polski', level: 'Ojczysty'},
        {name: 'Angielski', level: ' A2/B1'}
      ],
      additionalList: [
        {icon: 'fas fa-car', text: 'Prawo jazdy kat. B'},
        {icon: 'fas fa-map-marked-alt', text: 'Gotowość do relokacji'},
        {
          icon: 'fas fa-handshake',
          text: 'Komunikatywność oraz zarządzanie ludźmi'
        },
        {icon: 'fas fa-file-alt', text: 'Dokumentacja/Raportowanie prac'},
        {icon: 'fas fa-clock', text: 'Umiejętność pracy pod presją czasu'},
        {icon: 'fas fa-users', text: 'Reprezentowanie koła podczas wydarzeń uczelnianych i branżowych'},
        {icon: 'fas  fa-bolt', text: 'Tworzenie treści promocyjnych'}
      ],experienceList: [
                {
                  company: 'KULE',
                  period: 'styczeń 2023 – obecnie',
                  title: 'Kierownik regionalny, Audytor, Szkoleniowiec',
                  location: 'Opole/Wrocław',
                  achievements: [
                    'Kierownik regionalny odpowiedzialny za nadzór operacyjny oraz rozwój sieci punktów sprzedaży Bubble Tea w regionie',
                    'Nadzór nad kilkoma lokalizacjami: kontrola jakości obsługi klienta, przestrzeganie standardów pracy oraz procedur operacyjnych',
                    'Współpraca z opiekunami lokali i kadrami prowadzącymi, prowadzenie motywowania zespołu, treningi pracowników, pomoc w rozwiązywaniu problemów bieżących',
                    'Praca z HR i marketingiem: zgłaszanie potrzeb kadrowych, wsparcie w kampaniach lokalnych, dbanie o atrakcyjność punktów w głowie klientów',
                    'Monitorowanie i audytowanie punktów sprzedaży',
                    'Szkolenie nowych pracowników'
                  ]
                },

        {
          company: 'TechForKids',
          period: 'czerwiec 2019 – grudzień 2023',
          title: 'Instruktor',
          location: 'Lubin',
          achievements: [
            'Tworzenie zajęć z robotyki dla dzieci',
            'Obsługa strefy zabaw dla dzieci ',
            'Animacja i obsługa gości na imprezach okolicznościowych'
          ]
        },
                 {
                   company: 'Organizacja imprez okolicznościowych',
                   period: '2017 – 2021',
                   title: '',
                   location: '',
                   achievements: [
                     'Obsługa strefy gasronomicznej',
                     'Obsługa gości na imprezach okolicznościowych'
                   ]
                 }
      ],
educationList: [
  {
    institution: 'Politechnika Opolska',
    year: '2025 - obecnie',
    degree: 'Dyplom Studiów Technicznych: Tytuł magistra',
    field: 'Zarządzanie i inżynieria produkcji',
    specialty: 'Zarządzanie projektami',
    details: [
      'Organizacja warsztatów i szkoleń dla studentów'
    ]
  },
  {
    institution: 'Politechnika Opolska',
    year: '2021 - 2025',
    degree: 'Dyplom Studiów Technicznych: Tytuł inżyniera',
    field: 'Zarządzanie i inżynieria produkcji',
    specialty: 'LEAN management',
    details: [
      'Aktywności i stowarzyszenia: Przedstawiciel koła oraz wsparcie ds. mediów w kole naukowym SKN Expert działającym przy kierunku Zarządzanie i Inżynieria Produkcji',
      'Organizacja warsztatów i szkoleń dla studentów'
    ]
  }
],
      projectsList: [
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
         field: 'Computer Science / Software Engineering',
         specialty: '',
         details: [
           'Chair of the scientific club, responsible for organizing open days and technology workshops.',
           'Class representative throughout the entire course of studies.',
           'Provided programming and IT tutoring.',
           'Active participant in project teams using Scrum methodologies.'
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
