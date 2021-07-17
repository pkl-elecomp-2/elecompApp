import { ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor(
    private toastController: ToastController
  ) {}

  // Success
  async showSuccess(message: string, duration: number = 3000) {
    return (await this.toastController.create({
      message: message,
      duration: duration,
      color: 'success',
      buttons: ['OK']
    })).present();
  }

  // Error
  async showError(message: string, duration: number = 3000) {
    return (await this.toastController.create({
      message: message,
      duration: duration,
      color: 'danger',
      buttons: ['OK']
    })).present();
  }

  // Warning
  async showWarning(message: string, duration: number = 3000) {
    return (await this.toastController.create({
      message: message,
      duration: duration,
      color: 'warning',
      buttons: ['OK']
    })).present();
  }
}
