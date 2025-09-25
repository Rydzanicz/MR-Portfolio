import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  typedText = '';
  fullText = 'Full-Stack Developer';
  currentIndex = 0;

  stats = [
    { number: '3+', label: 'Lata doświadczenia komercyjnego', icon: 'fas fa-briefcase' },
    { number: '1+', label: 'Lata doświadczenia freelance', icon: 'fas fa-user-tie' },
    { number: '1+', label: 'Lata doświadczenia utrzymania własnego sklepu', icon: 'fas fa-store' }
  ];

  technologies = [
    {name: 'Java', icon: 'fab fa-java', color: '#f89820'},
    {name: 'Spring Boot', icon: 'fas fa-leaf', color: '#6db33f'},
    {name: 'Angular', icon: 'fab fa-angular', color: '#dd0031'},
    {name: 'TypeScript', icon: 'fab fa-js', color: '#3178c6'},
    {name: 'PostgreSQL', icon: 'fas fa-database', color: '#4479a1'},
    {name: 'Docker', icon: 'fab fa-docker', color: '#2496ed'},
    {name: 'Google Cloud', icon: 'fab fa-google', color: '#4285f4'},
    {name: 'Git', icon: 'fab fa-git-alt', color: '#f05032'}
  ];

  featuredProjects = [
    {
      title: 'Platforma Bankowa Cinkciarz.pl',
      description: 'System bankowy z automatyzacją procesów spłat i komunikacją z BIK',
      technologies: ['Java', 'Spring', 'PostgreSQL', 'Angular'],
      image: 'assets/cinkciarz/strona.jpg',
      link: '/portfolio'
    },
    {
      title: 'E-commerce GoldenTag.pl',
      description: 'Nowoczesna platforma e-commerce z procesem checkout i fakturowaniem',
      technologies: ['Java', 'Spring', 'PostgreSQL', 'Angular'],
      image: 'assets/goldenTag/home.jpg',
      link: '/portfolio'
    }
  ];

  services = [
    {
      title: 'Rozwój Backend',
      description: 'Tworzę skalowalne API i mikrousługi z wykorzystaniem Java i Spring Boot',
      icon: 'fas fa-server',
      features: ['REST API', 'Mikrousługi', 'Bazy danych', 'Integracje']
    },
    {
      title: 'Aplikacje Frontend',
      description: 'Projektuję nowoczesne, responsywne interfejsy użytkownika',
      icon: 'fas fa-laptop-code',
      features: ['Angular', 'Responsive Design', 'TypeScript']
    },
    {
      title: 'DevOps & Cloud',
      description: 'Automatyzuję procesy deployment i zarządzam infrastrukturą chmurową',
      icon: 'fas fa-cloud',
      features: ['Docker', 'CI/CD', 'Google Cloud', 'Monitoring']
    }
  ];

  ngOnInit() {
    this.typeWriter();
  }

  typeWriter() {
    if (this.currentIndex < this.fullText.length) {
      this.typedText += this.fullText.charAt(this.currentIndex);
      this.currentIndex++;
      setTimeout(() => this.typeWriter(), 100);
    }
  }
}
