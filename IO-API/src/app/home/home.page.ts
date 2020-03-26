import { ConectionService } from './../Servicios/conection.service';
import { Message } from './../Clases/message';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  prueba:Message;
  formulario = {texto:""};

  constructor(private network:ConectionService) {
  }//


  ngOnInit(){
    this.network.listen("message").subscribe((dato)=>{
      console.log("Nuevo Mensaje: "+ dato);
    });
  }



  enviar(){
    if(this.formulario.texto.length >= 0){
      this.network.enviar(this.network.generarMensaje(this.formulario.texto));
    }//
  }//*


}////
