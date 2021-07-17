import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  username: any;

  constructor(private storage: Storage, private router: Router) { }

  ionViewWillEnter() {
    this.storage.get('user').then((value) => {
      this.username = (value != "") ? value : 'Guest';
    });
  };

  ngOnInit() {
  }

  checkIcon() {
    if(this.username != "Guest") {
      return true;
    } else {
      return false;
    }
  }

  logOut() {
    this.storage.set('user', '');
    this.reloadCurrentRoute();
  }

  reloadCurrentRoute() {
    const currentUrl = 'tab/profil';
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
      event.target.complete();
  }
}
