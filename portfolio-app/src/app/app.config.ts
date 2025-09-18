import { Routes } from '@angular/router';

import {PortfolioComponent} from './components/portfolio/portfolio.component';
import {HomeComponent} from './components/home/home.component';
import {CvGeneratorComponent} from './components/cv-generator/cv-generator.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'cv-generator', component: CvGeneratorComponent }
];
