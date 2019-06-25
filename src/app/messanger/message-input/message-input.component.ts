import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css']
})
export class MessageInputComponent implements OnInit {

  @Output() newMessage: EventEmitter<any> = new EventEmitter();
  @Output() isTyping: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  
  }

  sendMessage(event) {
   
      this.newMessage.emit(event.currentTarget.value);
      event.currentTarget.value="";
  }

  onTypying() {
    this.isTyping.emit(true);
  }
}
