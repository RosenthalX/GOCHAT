import { ConectionService } from './../Servicios/conection.service';
import { Message } from './../Clases/message';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  prueba:Message;

  constructor(private network:ConectionService) {
  }//



}////
