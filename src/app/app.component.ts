import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // styles: [`
  //     h3 {
  //       color: darkgreen;
  //     }
  //     .white-text {
  //       color: white;
  //     }
  // `]
})
export class AppComponent {
  title = 'my-first-app';
  name = "Sidhu";
  showSecret = false;
  log:any = [];

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
    // this.log.push(new Date());

  }
}
