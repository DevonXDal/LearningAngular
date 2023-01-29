import { Component } from '@angular/core';
import { MyLoggerService } from 'my-logger'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app1';

  constructor(loggerService: MyLoggerService) {
    loggerService.log('hello world');
  }
}
