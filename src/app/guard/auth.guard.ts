/* eslint-disable arrow-body-style */
import { Injectable, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    checkUser;

    constructor(private router: Router, private storage: Storage, private alertController: AlertController) {}

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        // eslint-disable-next-line max-len
        if (await this.storage.get('user') !== '' && this.storage.get('user') !== null ) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.presentAlert('Anda belum login');
        return false;
    }

    async presentAlert(value) {
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Alert',
          message: value,
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => { }
            },
            {
              text: 'Login',
              handler: () => {
                this.router.navigate(['login']);
              }
          }]
        });
        await alert.present();
        const { role } = await alert.onDidDismiss();
        // console.log('onDidDismiss resolved with role', role);
      }
}
