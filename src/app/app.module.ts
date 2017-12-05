import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HumanComponent } from './human/human.component';
import { SaiyanComponent } from './saiyan/saiyan.component';
import { SuperSayanComponent } from './super-sayan/super-sayan.component';
import { Supersayan2Component } from './supersayan2/supersayan2.component';
import { Supersayan3Component } from './supersayan3/supersayan3.component';
import { Supersayan4Component } from './supersayan4/supersayan4.component';


@NgModule({
  declarations: [
    AppComponent,
    HumanComponent,
    SaiyanComponent,
    SuperSayanComponent,
    Supersayan2Component,
    Supersayan3Component,
    Supersayan4Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
