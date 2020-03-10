import { Component } from '@angular/core';
import {DataUsersService} from './interface/data-users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataUsersService]
})
export class AppComponent {
  title = 'Interface';
  constructor(public dataUsersService: DataUsersService) {
  }
}
