import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {PortfolioComponent} from './components/portfolio/portfolio.component';
import {CvGeneratorComponent} from './components/cv-generator/cv-generator.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {TranslatePipe} from './pipes/translate.pipe';
import {AppRoutingModule} from './app.routes';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NavigationComponent,
    PortfolioComponent,
    HomeComponent,
    AppComponent,
    CvGeneratorComponent,
    TranslatePipe
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
}
