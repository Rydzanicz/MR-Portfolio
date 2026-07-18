import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ORGANIZACJA } from '../../core/stowarzyszenie-data';

@Component({
  selector: 'app-nawigacja',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nawigacja.component.html',
  styleUrls: ['./nawigacja.component.scss']
})
export class NawigacjaComponent {
  org = ORGANIZACJA;
  menuOtwarte = false;

  przelaczMenu(): void {
    this.menuOtwarte = !this.menuOtwarte;
  }

  zamknijMenu(): void {
    this.menuOtwarte = false;
  }
}
