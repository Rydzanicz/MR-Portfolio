import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ORGANIZACJA } from '../../core/stowarzyszenie-data';

@Component({
  selector: 'app-stopka',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './stopka.component.html',
  styleUrls: ['./stopka.component.scss']
})
export class StopkaComponent {
  org = ORGANIZACJA;
  rok = new Date().getFullYear();
}
