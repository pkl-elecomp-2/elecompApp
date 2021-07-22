import { Component, NgZone, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { Router, NavigationExtras } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-beranda',
  templateUrl: './beranda.page.html',
  styleUrls: ['./beranda.page.scss'],
})
export class BerandaPage implements OnInit {

  responseData: any;
  getSlider: any;
  getPromo: any;

  bannerSlide = {
    speed: 400,
    spaceBetween: 10,
    slidesPerView: 1.4,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 5000,
    },
  };

  promoSlide = {
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
  ) {
    this.serverUrlAsset = this.api.serverUrlAsset;
  }

  ngOnInit() {}

  // ionViewWillEnter() {
  //   this.dataSlider();
  //   this.dataPromo();
  // }

  async dataSlider() {
    const loading = await this.loadingController.create({
      spinner: 'dots',
      message: 'Please Wait...',
    });
    await loading.present();
    await this.api.getData('getSlider').subscribe(
      (res) => {
        this.responseData = res;
        console.log(res);
        if (this.responseData.getSlider) {
          this.getSlider = this.responseData.getSlider;
          loading.dismiss();
        } else {
          this.getSlider = '';
          loading.dismiss();
        }
      },
      (err) => {
        console.log(err);
        loading.dismiss();
      }
    );
  }

  async dataPromo() {
    this.api.getData('getPromo').subscribe(
      (res) => {
        this.responseData = res;
        console.log(res);
        if (this.responseData.getPromo) {
          this.getPromo = this.responseData.getPromo;
        } else {
          this.getPromo = '';
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  openDetailPromo(idPromo: number) {
    const navExtras: NavigationExtras = {
      state: {
        idpromo: idPromo,
      },
    };
    this.router.navigate(['detailpromo'], navExtras);
  }
}
