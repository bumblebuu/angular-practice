import { Component } from '@angular/core';
import { MockData } from './model/mock-data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-interaction-project';
  md: MockData;
}
