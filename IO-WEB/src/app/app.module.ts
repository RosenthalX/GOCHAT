import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { ConectionService } from './Servicios/conection.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide:"APP_LINK", useValue: "http://10.8.3.241"},
    ConectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
