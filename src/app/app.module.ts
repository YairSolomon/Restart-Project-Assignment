import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Ad} from './ad.service';
import {Person} from './person.service';


import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [Ad, Person],
  bootstrap: [AppComponent]
})
export class AppModule { }
