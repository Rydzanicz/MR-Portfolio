import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'app-collaboration',
  standalone: true,
  imports: [CommonModule, RouterModule, FooterComponent],
  templateUrl: './collaboration.component.html',
  styleUrls: ['./collaboration.component.scss']
})
export class CollaborationComponent implements OnInit {
  typedText = '';
  fullText = 'Sklepy dla rękodzielniczek';
  currentIndex = 0;

  stats = [
    { number: '200zł', label: 'Koszty rozpoczęcia', icon: 'fas fa-coins' },
    { number: '7/7', label: 'Wsparcie techniczne', icon: 'fas fa-envelope' },
    { number: '100%', label: 'Zadowolonych klientek', icon: 'fas fa-heart' },
    { number: '∞', label: 'Możliwości rozwoju', icon: 'fas fa-rocket' }
  ];

  ngOnInit() {
    this.typeWriter();
  }

  typeWriter() {
    if (this.currentIndex < this.fullText.length) {
      this.typedText += this.fullText.charAt(this.currentIndex);
      this.currentIndex++;
      setTimeout(() => this.typeWriter(), 150);
    }
  }
}
