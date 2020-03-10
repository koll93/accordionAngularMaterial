import { Injectable } from '@angular/core';
import data from '../../app/interface/interfaceArray.json';

@Injectable({
  providedIn: 'root'
})
export class DataUsersService {

  public nameUser: string;
  public userButtons: any;
  constructor() {
  this.nameUser = 'Petrov';
  this.userButtons = this.getUserButtons();
  }
  goToLink(link) {
    console.log(link);
  }
  getUserButtons() {
    try {
      return data.find(name => name.userName === this.nameUser).buttons;
    } catch (e) {
      console.log('User is not found');
      return 0;
    }
  }
}
