import { Component, OnInit, ViewChild } from '@angular/core';
import { IMessage, MessagingService } from 'src/app/services/messaging.service';

@Component({
  selector: 'messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css'],
})
export class MessagesListComponent implements OnInit {
  messages:IMessage[];
  @ViewChild('messagesContainer') messagesContainer;
  constructor(private messagingService:MessagingService) 
  { 
    
  }

  ngOnInit() {
    this.messagingService.$messages.subscribe(messages=>{
      if (messages && this.messages!=messages) {
        this.messages = messages;
        this.scrollDown();
      }
      
    })
  }

  scrollDown() {
    this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
  }

  getAlignment(message) {
     
       return this.messagingService.user==message.owner?'left':'right';
     
  }

}
