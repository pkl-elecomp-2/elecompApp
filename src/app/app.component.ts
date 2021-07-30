import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private storage: Storage) {
    this.storage.create();

    this.storage.get('isChecked').then( data => {
      // If user won't remember me
      console.log(data);
      if (!data) {
        this.storage.set('user', '');
      }
    });

    this.storage.get('user').then(val => {
      console.log(val);
      if(val === undefined || val === null) {
        this.storage.set('user', '');
      }
    });

  }
}
