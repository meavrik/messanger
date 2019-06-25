import { Component, OnInit, Input } from '@angular/core';
import { IMessage, MessagingService } from 'src/app/services/messaging.service';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() message:IMessage;

  constructor(private messagingService: MessagingService ) { }

  ngOnInit() {
  }

  get isMine() {
    return this.messagingService.user==this.message.owner;
  }

}
