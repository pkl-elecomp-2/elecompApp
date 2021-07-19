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

    this.storage.get('user').then( data => {
      if (data === null || data === undefined) {
        this.storage.set('user', '');
      }
    });
  }
}
