import { Component, OnInit, Input } from '@angular/core';
import { IFriend } from 'src/app/services/messaging.service';

@Component({
  selector: 'friend-item',
  templateUrl: './friend-item.component.html',
  styleUrls: ['./friend-item.component.css']
})
export class FriendItemComponent implements OnInit {
  @Input() friend:IFriend;

  constructor() { }

  ngOnInit() {
  }

}
