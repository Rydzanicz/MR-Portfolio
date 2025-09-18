import { Component, OnInit } from '@angular/core';
import {NgForOf} from '@angular/common';

interface WorkExperience {
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string[];
}

@Component({
  selector: 'app-cv-generator',
  templateUrl: './cv-generator.component.html',
  imports: [
    NgForOf
  ],
  styleUrls: ['./cv-generator.component.scss']
})
export class CvGeneratorComponent implements OnInit {

  workExperiences: WorkExperience[] = [
    {
      company: 'Cinkciarz.pl',
      position: 'Full-Stack Developer',
      startDate: 'czerwiec 2021',
      endDate: 'grudzień 2024',
      description: [
        'Tworzenie innowacyjnych narzędzi bankowych i pożyczkowych w Java, Spring, MySQL, Rest Api i microservice',
        'Implementacja automatycznych harmonogramów spłat, systemu nadpłat i dystrybucji zobowiązań',
        'Optymalizacja kodu i wydajności systemów',
        'Rozwój interfejsów użytkownika w Angular',
        'Integracja frontendu z backendem, zapewnienie spójności i wysokiej wydajności',
        'Praca z Docker, GCP, GIT'
      ]
    },
    {
      company: 'Fullstack',
      position: 'Full-Stack Developer',
      startDate: 'styczeń 2025',
      description: [
        'Rozwój aplikacji webowych z wykorzystaniem Angular i Spring',
        'Implementacja rozwiązań automatyzacji procesów',
        'Projektowanie interfejsów użytkownika',
        'Integracja API systemów płatności i mailowych'
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void { }

}
