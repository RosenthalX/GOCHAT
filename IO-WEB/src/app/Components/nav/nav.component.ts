import { ConectionService } from './../../Servicios/conection.service';
import { Component, OnInit } from '@angular/core';
import { Message } from '../../Clases/message';
import {interval} from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  formulario = {texto:""}
  grupos = [];
  constructor(private con:ConectionService) { }

  ngOnInit() {
    this.con.listen("message").subscribe((dato)=>{
      console.log(dato);
    });

    interval(1000).subscribe(()=>{
      this.grupos = this.con.obtenerGrupos();
    });
  }//

  enviar(){
    console.log(this.formulario.texto);
  }//

}////

