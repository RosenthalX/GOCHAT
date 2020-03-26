import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }


  active(){
    this.isActive = !this.isActive;
  }

}
