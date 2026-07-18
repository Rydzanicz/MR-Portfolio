import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SPRAWOZDANIA, Sprawozdanie } from '../../core/stowarzyszenie-data';

@Component({
  selector: 'app-sprawozdanie',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sprawozdanie.component.html',
  styleUrls: ['./sprawozdanie.component.scss']
})
export class SprawozdanieComponent implements OnInit {
  raport?: Sprawozdanie;
  poprzedni?: number;
  nastepny?: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Reaguje na zmianę parametru :rok (jeden komponent obsługuje wszystkie lata)
    this.route.paramMap.subscribe(params => {
      const rok = Number(params.get('rok'));
      this.raport = SPRAWOZDANIA.find(s => s.rok === rok);
      const lata = SPRAWOZDANIA.map(s => s.rok).sort((a, b) => a - b);
      const idx = lata.indexOf(rok);
      this.poprzedni = idx > 0 ? lata[idx - 1] : undefined;
      this.nastepny = idx < lata.length - 1 ? lata[idx + 1] : undefined;
      window.scrollTo(0, 0);
    });
  }
}
