import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AppRoutingModule} from "./app.routes";
import {TranslatePipe} from "./pipes/translate.pipe";

@NgModule({
    declarations: [
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        TranslatePipe,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: []
})
export class AppModule { }
