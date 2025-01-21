import { Routes } from '@angular/router';
import { CVFormComponent } from './components/cv-form/cv-form.component';
import { CVPreviewComponent } from './components/cv-preview/cv-preview.component';
import { PDFGeneratorComponent } from './components/pdf-generator/pdf-generator.component';

export const routes: Routes = [
  { path: 'form', component: CVFormComponent },
  { path: 'preview', component: CVPreviewComponent },
  { path: 'download', component: PDFGeneratorComponent },
  { path: '', redirectTo: '/form', pathMatch: 'full' }
];
