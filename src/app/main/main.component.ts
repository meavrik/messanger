import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  messangers =[
    {title:"Messanger 1",owner:"Avrik"},
    {title:"Messanger 1",owner:"Tal"},
  ]

  constructor() { }

  ngOnInit() {
  }


  onAdd() {
    this.messangers.push({title:"Messanger "+this.messangers.length+1,owner:"New user"})
  }

}
