import { ToastService } from './../../services/toast.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-beranda',
  templateUrl: './beranda.page.html',
  styleUrls: ['./beranda.page.scss'],
})
export class BerandaPage implements OnInit {

  getSlider: any;
  getPromo: any;
  getLayanan: any;

  oneItemSlide = {
    speed: 400,
    spaceBetween: 10,
    slidesPerView: 1.4,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 5000,
    },
  };

  dragSlide = {
    speed: 400,
    spaceBetween: 10,
    slidesPerView: 3.5
  };

  serverUrlAsset: string;

  constructor(
    public api: ApiService,
    public loadingController: LoadingController,
    private router: Router,
    public navController: NavController,
    public alertController: AlertController,
    private storage: Storage,
    private toast: ToastService
  ) {
    this.serverUrlAsset = this.api.serverUrlAsset;
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this.dataSlider();
    this.dataPromo();
    this.dataLayanan();
    this.checkIcon();
    // DEBUG
    console.log('icon : '+this.checkIcon());
  }

  async dataSlider() {
    const loading = await this.loadingController.create({
      spinner: 'dots',
      message: 'Please Wait...',
    });
    await loading.present();

    await this.api.getData('Beranda').subscribe( (res) => {
      this.getSlider = (res.data.length > 0) ? res.data : '';
      loading.dismiss();
      },
      (err) => {
        console.log(err);
        loading.dismiss();
      }
    );
  }

  async dataLayanan() {
    await this.api.getData('Beranda/layanan').subscribe( (res) => {
      this.getLayanan = (res.data.length > 0) ? res.data : '';
      },
      (err) => {
        console.log(err);
      }
    );
  }

  async dataPromo() {
    await this.api.getData('Promo').subscribe( (res) => {
      this.getPromo = (res.activePromo) ? res.activePromo : '';
      },
      (err) => {
        console.log(err);
      }
    );
  }

  checkIcon() {
    const login = document.getElementById('login');
    const logout = document.getElementById('logout');
    // eslint-disable-next-line arrow-body-style
    this.storage.get('user').then(val => {
      login.style.display = (val) ? 'none' : 'block';
      logout.style.display = (val) ? 'block' : 'none';
    });
  }

  logOut() {
    this.storage.set('user', '');
    window.location.reload();
    this.toast.showSuccess('Logout Success');
    // this.router.navigate(['tab/beranda']);
    // this.reloadCurrentRoute();
  }

  reloadCurrentRoute() {
    const currentUrl = 'tab/beranda';
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
  }
}
