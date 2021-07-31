import { ApiService } from './../../services/api.service';
import { ToastService } from './../../services/toast.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string;
  password: string;
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
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
    if (this.username === undefined || this.password === undefined) {
      this.toastService.showError('Username atau Password tidak boleh kosong');
    } else {
      return this.api.login(this.username,this.password).subscribe( (res: any) => {
        if (res.status === 'success') {
          this.toastService.showSuccess(res.message);
          this.reRoute();
          this.saveStorage(this.username, this.isChecked, res.data);

          document.getElementById('login').style.display = 'none';
          document.getElementById('logout').style.display = 'block';

        } else {
          this.toastService.showError(res.message);
        }
      });
    }
  }

  // Save to Local Storage
  private saveStorage(user: string, isChecked: boolean, dataUser: any) {
    this.storage.set('user', user);
    this.storage.set('isChecked', isChecked);
    this.storage.set('dataUser', dataUser[0]);
  }

  // When Login success redirect to
  private reRoute() {
    const currentUrl = 'tab/beranda';
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
  }

}
