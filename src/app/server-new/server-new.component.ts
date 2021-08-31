import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-new',
  // template: `<app-server></app-server> 
  //   <app-server></app-server>
  //   <app-server></app-server>
  //   `,
  templateUrl: './server-new.component.html',
  styleUrls: ['./server-new.component.css']
})
export class ServerNewComponent implements OnInit {
  allowNewServer = false;
  serverCreation = 'No server was created!';
  serverName = 'Trustabit';
  userName="";
  whetherServerCreated = false;
  serverNew = ['Trustabit', 'Mckintosh 2']

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }
  onServerCreation() {
    this.whetherServerCreated = true;
    this.serverNew.push(this.serverName);
    this.serverCreation = 'Server is created! Name is ' + this.serverName;
  }

}
