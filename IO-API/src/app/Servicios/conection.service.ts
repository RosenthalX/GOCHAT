import { Injectable } from '@angular/core';
import * as io from "socket.io-client";
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConectionService {
  socket;
  isConnect:boolean = false;
  constructor() { }

  start(){
    if(this.isConnect == false)
    this.socket = io.connect("http://10.8.3.241");
    this.socket.on("connect",()=>{
      console.log("socket conectado");
      this.isConnect = true;
    });

    this.socket.on("reconnect",()=>{
      console.log("Socket reconectado");
    })
    
    this.socket.on("disconnect",()=>{
      console.log("Socket desconectado");
      this.isConnect = false;
    })
    
  }//
}///
