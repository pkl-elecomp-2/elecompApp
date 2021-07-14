import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.page.html',
  styleUrls: ['./tab.page.scss'],
})
export class TabPage implements OnInit {

  constructor(private storage: Storage) { }

  ngOnInit() {
  }

}
