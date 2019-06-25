import { Component, OnInit } from '@angular/core';
import { IFriend } from 'src/app/services/messaging.service';

@Component({
  selector: 'friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {

  friends:IFriend[] = [];
  filteredFriends:IFriend[] = [];
  searchStr;
  constructor() { }

  ngOnInit() {

    this.getFriends();
  }

  async getFriends() {
    let results = await fetch('https://uinames.com/api/?region=england&amount=20');
    let friends = await results.json();
    
    if (friends) {
      this.friends = friends.map(item=>{return {firstName:item.name,lastName:item.surname}})
      this.filteredFriends = [...this.friends];
    }
  }

  onInput(event) {
  
    let str = this.searchStr.toLowerCase();

    if (this.searchStr && this.searchStr.length>1) {
      this.filteredFriends = this.friends.filter(friend=>friend.firstName.toLowerCase().indexOf(str)!=-1 || friend.lastName.toLowerCase().indexOf(str)!=-1)
    } else {
      this.filteredFriends = [...this.friends];
    }
    
  }

}
