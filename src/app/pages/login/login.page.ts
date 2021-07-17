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

  ngOnInit() { }

  // Login
  onLogin() {
    // const headers = new HttpHeaders()
    // .set('Content-Type', 'application/x-www-form-urlencoded');

    // const params = new HttpParams()
    // .set('userEmail', this.username)
    // .set('userPassword', this.password);
    
    if (this.username == "elecomp" && this.password == "elecomp123") {
      this.presentToast('Login Success', 'success');
      this.reloadCurrentRoute();
      this.storage.set('user', this.username);      
    } else {
      this.presentToast('Login Failed', 'fail');
    }

    // return this.http.post('http://localhost:8080/login', params, {headers}).subscribe((response: any) => {
    //   this.storage.set('currentUser', response);
    //   this.presentToast(response.messages);
    //   this.reloadCurrentRoute();
    //   this.username = '';
    //   this.password = '';
    // }, error => {
    //   console.log(error);
    //   this.presentToast(error);
    // });
  }

  // Show the status when Login
  private async presentToast(msg: string, status: string) {
    let toast = (status == "success") ?
      await this.toastController.create({
        message: msg,
        duration: 2000,
        color: "success",
        buttons: ['Ok']
      }) :
      await this.toastController.create({
        message: msg,
        duration: 2000,
        color: "danger",
        buttons: ['Ok']
      });
    
    toast.present();
  }

  // When Login success redirect to
  private reloadCurrentRoute() {
    const currentUrl = 'tab/profile';
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
  }
}
