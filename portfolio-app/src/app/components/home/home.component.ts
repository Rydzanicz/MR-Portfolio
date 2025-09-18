import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {TranslatePipe} from '../../pipes/translate.pipe';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [
    NgForOf,
    NgIf,
    TranslatePipe
  ],
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'ResumeCraft',
      description: 'Modern CV generator with PDF export functionality',
      technologies: ['Angular', 'TypeScript', 'CSS', 'jsPDF'],
      image: 'assets/images/resumecraft.jpg',
      githubUrl: 'https://github.com/Rydzanicz/ResumeCraft',
      liveUrl: '#'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'Personal portfolio with multi-language support',
      technologies: ['Angular', 'SCSS', 'i18n', 'Bootstrap'],
      image: 'assets/images/portfolio.jpg',
      githubUrl: 'https://github.com/username/portfolio'
    }
    // Dodaj więcej projektów
  ];

  skills = [
    'Angular', 'TypeScript', 'JavaScript', 'Java', 'Spring Boot',
    'HTML5', 'CSS3', 'SCSS', 'Bootstrap', 'Angular Material',
    'Node.js', 'MySQL', 'PostgreSQL', 'Docker', 'Git'
  ];
}
