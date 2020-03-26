import { ConectionService } from './../../Servicios/conection.service';
import { Component, OnInit } from '@angular/core';
import { Message } from '../../Clases/message';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  formulario = {texto:""}
  constructor(private con:ConectionService) { }

  ngOnInit() {
    this.con.listen("message").subscribe((dato)=>{
      console.log(dato);
    });
  }

  enviar(){
    console.log(this.formulario.texto);
    if(this.formulario.texto.length>0)
      this.con.enviar(this.con.generarMensaje(this.formulario.texto));
  }//

}////
