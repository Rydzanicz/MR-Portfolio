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
      currentPosition: 'Psycholog  ',
      profileDescription: 'Psycholog z rocznym doświadczeniem w prowadzeniu zajęć psychologicznych dla dzieci i młodzieży. Pracuję w oparciu o uważność na potrzeby uczestników, dbając o budowanie bezpiecznej relacji i atmosfery sprzyjającej rozwojowi. Prowadziłam zarówno zajęcia indywidualne, jak i grupowe, skupiając się na wzmacnianiu kompetencji emocjonalnych, społecznych oraz umiejętności radzenia sobie w trudnych sytuacjach. Współpracuję z rodzicami i specjalistami, aby zapewnić spójne wsparcie i realną poprawę funkcjonowania dziecka. Jestem osobą zaangażowaną, odpowiedzialną i nastawioną na dalszy rozwój w pracy terapeutycznej, zarówno z dziećmi, jak i dorosłymi. ',
      skillsList: [
        'Praca z dziećmi i młodzieżą',
        'Umiejętność tworzenia indywidualnych planów wsparcia',
        'Planowanie i prowadzenie zajęć Treningu Umiejętności Społecznych',
        'Budowanie bezpiecznej, wspierającej atmosfery w grupie',
        'Moderowanie pracy grupowej i wspieranie interakcji między uczestnikami',
        'Wzmacnianie kompetencji komunikacyjnych, emocjonalnych i społecznych',
        'Prowadzenie konsultacji psychologicznych',
        'Rekrutacja pracówników oraz szkolenia',
        'Wdrażanie standardów obsługi, procedur pracy, harmonogramów',
         'Umiejętność strategicznego zarządzania zasobami ludzkimi',
        'Kontrolowanie jakości własnej pracy',
        'Prowadzenie audytów operacyjnych',
        'Umiejętność szybkiego uczenia się',
         'Umiejętności przekazywania wiedzy',
        'Praca w zespole',
        'Budowanie pozytywnego wizerunku firmy',
        'Umiejętność korzystania z AI w codziennej pracy'

      ],
      languagesList: [
        {name: 'Polski', level: 'Ojczysty'},
        {name: 'Angielski', level: 'B2'}
      ],
      additionalList: [
        {icon: 'fas fa-car', text: 'Prawo jazdy kat. B'},
        {icon: 'fas fa-map-marked-alt', text: 'Gotowość do relokacji'},
        {
          icon: 'fas fa-handshake',
          text: 'Komunikatywność oraz zarządzanie ludźmi'
        },
        {icon: 'fas fa-file-alt', text: 'Dokumentacja/Raportowanie prac'},
        {icon: 'fas fa-clock', text: 'Umiejętność pracy pod presją czasu'}
      ],experienceList: [
                {
                  company: 'DUDU PsychoSensorycznie',
                  period: 'Wrzesień 2025 – obecnie',
                  title: 'Trener Umiejętności Społecznych (TUS)',
                  location: 'Opole',
                  achievements: [
                   'Prowadzenie Treningów Umiejętności Społecznych (TUS) dla dzieci i młodzieży',
                   'Wspieranie rozwoju kompetencji społecznych i emocjonalnych uczestników',
                   'Praca nad komunikacją, relacjami i regulacją emocji',
                   'Dostosowywanie metod pracy do indywidualnych potrzeb',
                   'Współpraca z zespołem specjalistów'
                  ]
                },
              {
                  company: 'Młodzież w Centrum',
                  period: 'Wrzesień 2025 – obecnie',
                  title: 'Koordynator projektu',
                  location: 'Opole',
                  achievements: [
                    'Organizacja i koordynacja działań dla młodzieży',
                    'Współtworzenie warsztatów rozwojowych',
                    'Aktywizacja społeczna młodzieży',
                    'Organizacja wydarzeń i spotkań',
                    'Współpraca z zespołem projektowym',
                    'Wsparcie psychologiczne młodzieży'
                  ]
                },
              {
                  company: 'KULE',
                  period: 'lipiec 2023 – obecnie',
                  title: 'Menager lokali usługowych, Specjalista ds. Public relations, Rekruter, Szkoleniowiec',
                  location: 'Opole/Wrocław',
                  achievements: [
                    'Tworzenie i realizacja strategii komunikacji w social mediach',
                    'Planowanie, tworzenie i publikacja treści (Instagram, TikTok, Snapchat)',
                    'Tworzenie komunikacji marketingowej i wizerunkowej',
                    'Współpraca przy kampaniach promocyjnych i akcjach marketingowych',
                    'Prowadzenie procesów rekrutacyjnych',
                     'Selekcja kandydatów i prowadzenie rozmów rekrutacyjnych',
                     'Nadzór nad kilkoma lokalizacjami: kontrola jakości obsługi klienta, przestrzeganie standardów pracy oraz procedur operacyjnych',
                     'Współpraca z opiekunami lokali i kadrami prowadzącymi, prowadzenie motywowania zespołu, treningi pracowników, pomoc w rozwiązywaniu problemów bieżących'
                  ]
                }
      ],
educationList: [
  {
    institution: 'Uniwersytet Opolski',
    year: '2021 - 2026',
    degree: 'Dyplom Studiów Wyższych: Tytuł magister',
    field: 'Psychologia',
        specialty: '',
    details: [
      'Przygotowanie pedagogiczne'
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
