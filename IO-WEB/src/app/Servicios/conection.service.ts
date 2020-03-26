import { Message } from './../Clases/message';
import { Injectable, Inject } from '@angular/core';
import * as io from "socket.io-client";



@Injectable({
  providedIn: 'root'
})
export class ConectionService {
  private socket;
  private usuario:string = "demogorgon";
  private destino:string = "";
  private grupo:string = "";
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
    });

    this.socket.on("reconnect",()=>{
      console.log("Socket reconectado");
    });
    
    this.socket.on("disconnect",()=>{
      console.log("Socket desconectado");
      this.isConnect = false;
    });
    
  }//
}///
