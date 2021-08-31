import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  // styleUrls: ['./server.component.css']
  styles: [`
    .online {
      color: white;
    }
  `]
})
export class ServerComponent implements OnInit {
  serverID:number = 12;
  serverStatus:string = 'connected';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
   }

  ngOnInit(): void {
  }

  getServerStatus() {
    return this.serverStatus;
  }
  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
