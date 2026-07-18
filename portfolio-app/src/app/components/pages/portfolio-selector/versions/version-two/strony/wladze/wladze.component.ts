import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZARZAD, KOMISJA_REWIZYJNA, INNE_ORGANY, Osoba } from '../../core/stowarzyszenie-data';

@Component({
  selector: 'app-wladze',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wladze.component.html',
  styleUrls: ['./wladze.component.scss']
})
export class WladzeComponent {
  zarzad = ZARZAD;
  komisja = KOMISJA_REWIZYJNA;
  inne = INNE_ORGANY;

  inicjaly(o: Osoba): string {
    return o.imieNazwisko.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
  }
}
