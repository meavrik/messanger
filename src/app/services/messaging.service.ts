import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface IMessage {
  id: string;
  owner?: string;
  from?: string;
  to?: string;
  message: string;
  timestamp: number;
}

export interface IFriend {
  firstName: string;
  lastName: string;
  iconUrl?: string;
}

@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  private _$messages: BehaviorSubject<IMessage[]>;
  private _$otherTyping: BehaviorSubject<string>;

  private messages: IMessage[] = [];
  user = "";
  lastMessage;

  constructor() {
    localStorage.removeItem("message");
    localStorage.removeItem("typing");
    this._$messages = <BehaviorSubject<IMessage[]>>new BehaviorSubject([]);
    this._$otherTyping = <BehaviorSubject<string>>new BehaviorSubject("");

    setInterval(() => {
      let lsData = localStorage.getItem("message")
      let typing = localStorage.getItem("typing");
      if (typing != this.user) {
        this._$otherTyping.next(typing);
      }

      if (lsData) {
        if (lsData !== this.lastMessage) {

          let newData: IMessage = JSON.parse(lsData);

          if (!this.messages.find(item => item.id === newData.id)) {
            this.messages = [...this.messages, newData];
            this._$messages.next(this.messages);
          }

          this.lastMessage = lsData;
        }
      }
    }, 200)
  }

  setUser(name) {
    this.user = name;
  }

  get $messages(): Observable<IMessage[]> { return this._$messages.asObservable(); }
  get $otherTyping(): Observable<string> { return this._$otherTyping.asObservable(); }

  sendMessage(message: IMessage) {
    this.messages.push(message);
    this._$messages.next(this.messages);
    localStorage.setItem("message", JSON.stringify(message))
  }


  updateTyping() {
    localStorage.setItem("typing", this.user);
    setTimeout(() => {
      if (localStorage.getItem("typing") == this.user) {
        localStorage.removeItem("typing");
      }

    }, 1000)
  }
}
