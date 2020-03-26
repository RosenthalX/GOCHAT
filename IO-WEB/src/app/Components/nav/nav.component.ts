import { ConectionService } from './../../Servicios/conection.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private con:ConectionService) { }

  ngOnInit() {
  }

}
