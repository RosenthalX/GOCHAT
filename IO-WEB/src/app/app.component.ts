import { ConectionService } from './Servicios/conection.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IO-WEB';

  constructor(private con:ConectionService){
    this.con.start();
  }
}
