import { Component, OnInit, Input } from '@angular/core';
import { MessagingService, IMessage } from '../services/messaging.service';

@Component({
  selector: 'app-messanger',
  templateUrl: './messanger.component.html',
  styleUrls: ['./messanger.component.css'],
  providers: [MessagingService]
})
export class MessangerComponent implements OnInit {
  @Input() title = "";
  @Input() owner = "";
  messages: IMessage[] = [];
  constructor(private messagingService: MessagingService) { }

  ngOnInit() {
    this.messagingService.$messages.subscribe(messages => {
      this.messages = messages;
    })
    this.messagingService.setUser(this.owner)
  }


  onNewMessage(message) {
    if (message) {
      let currentDate = new Date().getTime();
      let newMessage: IMessage = { message: message, timestamp: currentDate, owner: this.owner, id: this.owner + this.messages.length }
      this.messagingService.sendMessage(newMessage);
    }

  }

  onTyping() {
    this.messagingService.updateTyping()
  }

}
