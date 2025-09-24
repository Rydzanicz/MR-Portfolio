import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CvComponent} from './components/cv/cv.component';
import {HomeComponent} from './components/home/home.component';
import {HeaderComponent} from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CvComponent, HomeComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio-app';
}
