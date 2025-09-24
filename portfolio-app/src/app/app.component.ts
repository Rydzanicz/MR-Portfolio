import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CvComponent} from './components/cv/cv.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CvComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio-app';
}
