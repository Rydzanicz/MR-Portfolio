import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ORGANIZACJA, SPRAWOZDANIA } from '../../core/stowarzyszenie-data';

@Component({
  selector: 'app-nawigacja',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nawigacja.component.html',
  styleUrls: ['./nawigacja.component.scss']
})
export class NawigacjaComponent {
  org = ORGANIZACJA;
  lata = SPRAWOZDANIA.map(s => s.rok);
  menuOtwarte = false;
  raportyOtwarte = false;

  przelaczMenu(): void {
    this.menuOtwarte = !this.menuOtwarte;
  }

  zamknijMenu(): void {
    this.menuOtwarte = false;
    this.raportyOtwarte = false;
  }
}
