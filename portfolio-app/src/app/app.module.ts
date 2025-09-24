import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from "./app.routes";
import {TranslatePipe} from "./pipes/translate.pipe";
import {CvComponent} from "./components/cv/cv.component";

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CvComponent,
    HttpClientModule,
    FormsModule,
    TranslatePipe,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
}
