import { Message } from './../Clases/message';
import { Injectable, Inject } from '@angular/core';
import * as io from "socket.io-client";
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ConectionService {
  private socket;
  private usuario:string = "demogorgon";
  private destino:string = "";
  private grupo:string = "";
  private solicitud:number = 0;


  isConnect:boolean = false;
  constructor(@Inject("APP_LINK") private link:string) { }

  start(){
    if(this.isConnect == false)
    this.socket = io.connect(this.link);
    this.socket.on("connect",()=>{
      const mens:Message = new Message({tipo:6,de:this.usuario,solicitud:0});
      console.log(mens);
      this.socket.send(mens);
      this.isConnect = true;
      this.listen("GRUPOID").subscribe((dato)=>{this.grupo = dato.message});
    });

    this.socket.on("reconnect",()=>{
      console.log("Socket reconectado");
    });
    
    this.socket.on("disconnect",()=>{
      console.log("Socket desconectado");
      this.isConnect = false;
    });
    


  }//

  enviar(dato:Message){
    if(this.isConnect){
      this.socket.send(dato);
    }//
  }////

  generarMensaje(datos):Message{
    let msn = new Message();
    msn.de = this.usuario;
    msn.para = this.destino;
    msn.datos = datos;
    console.log("GRUPO: "+this.grupo);
    msn.grupo = parseInt(this.grupo);
    msn.solicitud = this.solicitud;
    msn.tipo = 0;
    return msn;
  }

  listen(evento):Observable<any>{
    return new Observable((observer)=>{
      this.socket.on(evento,(datos)=>{
        observer.next(datos);
      });
    });
  }



}///
