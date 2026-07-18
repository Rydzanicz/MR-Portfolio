import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PortfolioComponent} from './components/portfolio/portfolio.component';
import {CvComponent} from './components/cv/cv.component';
import {HomeComponent} from './components/home/home.component';
import {ContactComponent} from './components/contact/contact.component';
import {CollaborationComponent} from './components/collaboration/collaboration.component';
import {PortfolioSelectorComponent} from './components/pages/portfolio-selector/portfolio-selector.component';
import {ATACYSAMI_ROUTES} from './components/pages/portfolio-selector/versions/version-one/atacysami.routes';


export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'portfolio-selector', component: PortfolioSelectorComponent},
  ...ATACYSAMI_ROUTES,
  {path: 'contact', component: ContactComponent},
  {path: 'cv', component: CvComponent},
  {path: 'wspolpraca', component: CollaborationComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
