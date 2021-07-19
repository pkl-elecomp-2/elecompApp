import { ToastService } from './../../services/toast.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';

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
    private http: HttpClient,
    private toastService: ToastService,
    private router: Router,
    private storage: Storage
  ) { }

  ngOnInit() {}

  // Login
  onLogin() {
    // const headers = new HttpHeaders()
    // .set('Content-Type', 'application/x-www-form-urlencoded');

    // const params = new HttpParams()
    // .set('userEmail', this.username)
    // .set('userPassword', this.password);

    if (this.username === 'elecomp' && this.password === 'elecomp123') {
      this.toastService.showSuccess('Login success!');
      this.reRoute();
      if (this.isChecked) {
        this.saveStorage(this.username, this.isChecked);
      } else {
        this.saveStorage(this.username, this.isChecked);
      }
    } else {
      this.toastService.showError('Login Failed: Invalid Username or Password');
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

  // Save to Local Storage
  private saveStorage(user: string, isChecked: boolean) {
    this.storage.set('user', user);
    this.storage.set('isChecked', isChecked);
  }

  // When Login success redirect to
  private reRoute() {
    const currentUrl = 'tab/profil';
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
  }
}
