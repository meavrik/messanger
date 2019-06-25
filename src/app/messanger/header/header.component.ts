import { Component, OnInit, Input } from '@angular/core';
import { MessagingService } from 'src/app/services/messaging.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title;
  otherTyping

  constructor(private messagingService: MessagingService) {
    this.messagingService.$otherTyping.subscribe(otherTyping => this.otherTyping = otherTyping)
  }

  ngOnInit() {
  }

}
