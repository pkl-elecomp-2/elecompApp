import { ApiService } from './../../services/api.service';
import { ToastService } from './../../services/toast.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string;
  password: string;
  isChecked: boolean = true;

  constructor(
    private api: ApiService,
    private toastService: ToastService,
    private router: Router,
    private storage: Storage
  ) { }

  ngOnInit() {}

  // Login
  onLogin() {
    // Check if username and password is empty
    console.log(`${typeof(this.username)} with value ${this.username}`);
    if (this.username === undefined || this.password === undefined) {
      this.toastService.showError('Username atau Password tidak boleh kosong');
    } else {
      return this.api.login(this.username,this.password).subscribe( (res: any) => {
        if (res.status === 'success') {
          this.toastService.showSuccess(res.message);
          this.reRoute();
          this.saveStorage(this.username, this.isChecked);
        } else {
          this.toastService.showError(res.message);
        }
      });
    }
  }

  // Save to Local Storage
  private saveStorage(user: string, isChecked: boolean) {
    this.storage.set('user', user);
    this.storage.set('isChecked', isChecked);
  }

  // When Login success redirect to
  private reRoute() {
    const currentUrl = 'tab/beranda';
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
  }
}
