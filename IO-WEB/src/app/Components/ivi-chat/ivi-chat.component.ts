import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import {map, filter} from 'rxjs/operators';

@Component({
  selector: 'app-ivi-chat',
  templateUrl: './ivi-chat.component.html',
  styleUrls: ['./ivi-chat.component.css']
})
export class IviChatComponent implements OnInit {

  @Input("numero") numero:number = 0;
  @Input("despliege") desp:string = "h";
  @Input("grupo") grupo:string ;
  isActive:boolean = false;
  formulario = {texto:""};
  @ViewChild("viewer") private childView:ElementRef;

  constructor() { }

  ngOnInit() {
    fromEvent(this.childView.nativeElement,"keyup").pipe(
      filter(dato => {
        const key = dato.keyCode;
        return key == 13;
      }),
      map((datos)=>{
        const dato = ""+datos.target.value;
        return dato;
      })
    ).subscribe((datos)=>{
      console.log(datos);
    });
  }


  active(){
    this.isActive = !this.isActive;
  }

}
