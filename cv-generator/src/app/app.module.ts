import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CVFormComponent } from './components/cv-form/cv-form.component';
import { CVPreviewComponent } from './components/cv-preview/cv-preview.component';
import { PDFGeneratorComponent } from './components/pdf-generator/pdf-generator.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    CVFormComponent,
    CVPreviewComponent,
    PDFGeneratorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
