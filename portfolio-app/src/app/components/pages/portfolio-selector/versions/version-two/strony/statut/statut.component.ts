import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ROZDZIALY_STATUTU,
  STATUT_META,
  CELE_REALIZACJI,
  OBSZARY_DZIALALNOSCI
} from '../../core/stowarzyszenie-data';

@Component({
  selector: 'app-statut',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './statut.component.html',
  styleUrls: ['./statut.component.scss']
})
export class StatutComponent {
  rozdzialy = ROZDZIALY_STATUTU;
  meta = STATUT_META;
  cele = CELE_REALIZACJI;
  obszary = OBSZARY_DZIALALNOSCI;
  aktywny = 0;

  wybierz(i: number): void {
    this.aktywny = i;
  }
}
