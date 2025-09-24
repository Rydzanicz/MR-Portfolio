import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import {CvComponent} from './components/cv/cv.component';

export const routes: Routes = [
    { path: '', component: CvComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'cv', component: CvComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
