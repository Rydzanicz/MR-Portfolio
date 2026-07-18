import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PARTNERZY, PARTNERZY_DODATKOWI } from '../../core/stowarzyszenie-data';

@Component({
  selector: 'app-partnerzy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partnerzy.component.html',
  styleUrls: ['./partnerzy.component.scss']
})
export class PartnerzyComponent {
  partnerzy = PARTNERZY;
  dodatkowi = PARTNERZY_DODATKOWI;
}
