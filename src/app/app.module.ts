import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MessangerComponent } from './messanger/messanger.component';
import { MessagesListComponent } from './messanger/messages-list/messages-list.component';
import { FriendsListComponent } from './messanger/friends-list/friends-list.component';
import { MessageComponent } from './messanger/messages-list/message/message.component';
import { FriendItemComponent } from './messanger/friends-list/friend-item/friend-item.component';
import { MessageInputComponent } from './messanger/message-input/message-input.component';
import { HeaderComponent } from './messanger/header/header.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MessangerComponent,
    MessageComponent,
    MessagesListComponent,
    FriendsListComponent,
    FriendItemComponent,
    MessageInputComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
