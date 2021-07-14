import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string;
  password: string;

  constructor(
    private http: HttpClient,
    private toastController: ToastController,
    private storage: Storage,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  onLogin() {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded');

    const params = new HttpParams()
    .set('userEmail', this.username)
    .set('userPassword', this.password);

    return this.http.post('http://localhost:8080/login', params, {headers}).subscribe((response: any) => {
      // console.log(response);
      this.storage.set('currentUser', response);
      this.presentToast(response.messages);
      // this.router.navigate(['tab/profil']);
      this.reloadCurrentRoute();
      this.username = '';
      this.password = '';
    }, error => {
      console.log(error);
      this.presentToast(error);
    });
  }

  reloadCurrentRoute() {
    const currentUrl = 'tab/profil';
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
  }

}
