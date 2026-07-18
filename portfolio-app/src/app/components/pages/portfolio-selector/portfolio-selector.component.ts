import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

interface PortfolioVersion {
  id: number;
  label: string;
  title: string;
  description: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-portfolio-selector',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './portfolio-selector.component.html',
  styleUrl: './portfolio-selector.component.scss'
})
export class PortfolioSelectorComponent {
  hoveredSegment: number | null = null;

  versions: PortfolioVersion[] = [
    {
      id: 1,
      label: 'Wersja 1',
      title: 'Klasyczna',
      description: 'Czysta, minimalistyczna wersja w bieli i jasnych, pastelowych barwach.',
      icon: 'fas fa-file-lines',
      route: '/version-1'
    },
    {
      id: 2,
      label: 'Wersja 2',
      title: 'Błękitna',
      description: 'Lekka, błękitna wersja inspirowana niebem i latawcami.',
      icon: 'fas fa-wind',
      route: '/version-2'
    },
    {
      id: 3,
      label: 'Wersja 3',
      title: 'Czerwona',
      description: 'Czerwona, wyrazista wersja z motywem maku i serca.',
      icon: 'fas fa-heart',
      route: '/version-3'
    }
  ];
}
