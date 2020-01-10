import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { routing } from '../app/app.routing';

import { AppComponent } from './app.component';
import { airplaneListaComponent } from './airplane-lista/airplane-lista.component';
import { airplaneFormComponent } from './airplane-form/airplane-form.component';
import { TheheaderComponent } from './theheader/theheader.component';

@NgModule({
  declarations: [
    AppComponent,
    airplaneListaComponent,
    airplaneFormComponent,
    TheheaderComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
