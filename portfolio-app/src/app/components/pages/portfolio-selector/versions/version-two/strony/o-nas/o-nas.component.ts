import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  ORGANIZACJA,
  CELE_REALIZACJI,
  OBSZARY_DZIALALNOSCI,
  SPRAWOZDANIA
} from '../../core/stowarzyszenie-data';

@Component({
  selector: 'app-o-nas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './o-nas.component.html',
  styleUrls: ['./o-nas.component.scss']
})
export class ONasComponent {
  org = ORGANIZACJA;
  cele = CELE_REALIZACJI;
  obszary = OBSZARY_DZIALALNOSCI;

  // Statystyki zbiorcze z 8 lat sprawozdań
  laczniOdbiorcy = SPRAWOZDANIA.reduce((s, r) => s + r.odbiorcy, 0);
  lataDzialania = new Date().getFullYear() - 2008;
  liczbaSprawozdan = SPRAWOZDANIA.length;
}
