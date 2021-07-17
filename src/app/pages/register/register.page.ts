import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  email: string;
  name: string;
  password: string;
  confirmPassword: string;

  constructor(
    private router: Router,
    private toastController: ToastController
  ) { }

  ngOnInit() {}

  onRegister(){

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

  // When Register success redirect to
  private reloadCurrentRoute() {
    const currentUrl = '/login';
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
  }
}
