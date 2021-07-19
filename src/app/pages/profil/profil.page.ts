import { ToastService } from './../../services/toast.service';
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

  constructor(
    private storage: Storage,
    private router: Router,
    private toastService: ToastService,
  ) { }

  ionViewWillEnter() {
    // Check if the user is logged in
    this.storage.get('user').then((value) => {
      this.username = (value == null || value === '') ? 'Guest' : value;
    });
  };

  ngOnInit() {}

  checkIcon() {
    return this.username !== 'Guest';
  }

  logOut() {
    this.storage.set('isChecked', false);
    this.storage.set('user', '').then(() => {
      this.toastService.showSuccess('You have been logged out');
    });
    this.redirect();
  }

  private redirect() {
    const currentUrl = 'tab/profil';
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  doRefresh(event) {
    console.log('Begin async operation');
      event.target.complete();
  }
}
