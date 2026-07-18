import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SPRAWOZDANIA } from '../../core/stowarzyszenie-data';

@Component({
  selector: 'app-sprawozdania',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sprawozdania.component.html',
  styleUrls: ['./sprawozdania.component.scss']
})
export class SprawozdaniaComponent {
  sprawozdania = SPRAWOZDANIA;

  // Zakres wartości do prostego wykresu słupkowego przychodów
  get maxPrzychod(): number {
    return Math.max(...this.sprawozdania.map(s => this.liczba(s.finanse.przychody)));
  }

  liczba(kwota: string): number {
    return parseFloat(kwota.replace(/[^\d,]/g, '').replace(',', '.')) || 0;
  }

  wysokoscSlupka(s: { finanse: { przychody: string } }): number {
    return Math.round((this.liczba(s.finanse.przychody) / this.maxPrzychod) * 100);
  }
}
