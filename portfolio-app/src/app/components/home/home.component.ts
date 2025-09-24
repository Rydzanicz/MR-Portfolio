import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  technologies = [
    { name: 'Java', icon: 'fab fa-java' },
    { name: 'Spring', icon: 'fas fa-leaf' },
    { name: 'Angular', icon: 'fab fa-angular' },
    { name: 'TypeScript', icon: 'fab fa-js' },
    { name: 'MySQL', icon: 'fas fa-database' },
    { name: 'Docker', icon: 'fab fa-docker' },
    { name: 'Google Cloud', icon: 'fab fa-google' },
    { name: 'Git', icon: 'fab fa-git-alt' }
  ];
}
