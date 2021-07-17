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

  nama: string;
  email: string;
  noWa: number;
  pesan: string;
  isLoading = false;

  public formSubmit: FormGroup;

  responseData: any;
  getSlider: any;
  getPromo: any;
  getEvent: any;
  getGaleri: any;

  bannerSlide = {
    // initialSlide: 0,
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

  eventSlide = {
    speed: 400,
    spaceBetween: 10,
    slidesPerView: 3.5
  };

  serverUrlAsset: string;
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  private captchaPassed: boolean = false;
  private captchaResponse: string;

  constructor(
    public api: ApiService,
    public loadingController: LoadingController,
    private router: Router,
    private formBuilder: FormBuilder,
    private zone: NgZone,
    public navController: NavController,
    public alertController: AlertController,
  ) {
    this.formSubmit = this.formBuilder.group({
      nama: ['', Validators.required],
      email: ['', Validators.required],
      noTlp: ['', Validators.required],
      deskripsiSurvey: ['', Validators.required],
      recaptcha: ['', Validators.required]
    });

    this.serverUrlAsset = this.api.serverUrlAsset;
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.dataSlider();
    this.dataPromo();
    this.dataEvent();
    this.dataGaleri();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: 'Terima kasih telah mengisi survey',
      buttons: ['OK']
    });

    alert.present();
  }

  captchaResolved(response: string): void{
    this.zone.run(()=>{
      this.captchaPassed = true;
      this.captchaResponse = response;
    });
    console.log('Ini response captcha '+ this.captchaResponse);
  }

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
    // const loading = await this.loadingController.create({
    //   message: 'Loading...'
    // });
    // await loading.present();
    // await this.api.Get_Data('getPromo')
    this.api.getData('getPromo').subscribe(
      (res) => {
        this.responseData = res;
        console.log(res);
        if (this.responseData.getPromo) {
          this.getPromo = this.responseData.getPromo;
          // loading.dismiss();
        } else {
          this.getPromo = '';
          // loading.dismiss();
        }
      },
      (err) => {
        console.log(err);
        // loading.dismiss();
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

  async dataEvent() {
    // const loading = await this.loadingController.create({
    //   message: 'Loading...'
    // });
    // await loading.present();
    // await this.api.Get_Data('getEvent')
    this.api.getData('getEvent').subscribe(
      (res) => {
        this.responseData = res;
        if (this.responseData.getEvent) {
          this.getEvent = this.responseData.getEvent;
          // loading.dismiss();
        } else {
          this.getEvent = '';
          // loading.dismiss();
        }
      },
      (err) => {
        console.log(err);
        // loading.dismiss();
      }
    );
  }

  openDetailEvent(idEvent: number) {
    const navExtras: NavigationExtras = {
      state: {
        idevent: idEvent,
      },
    };
    this.router.navigate(['detailevent'], navExtras);
  }

  async dataGaleri() {
    // const loading = await this.loadingController.create({
    //   message: 'Loading...'
    // });
    // await loading.present();
    // await this.api.Get_Data('getGaleri')
    this.api.getData('getGaleri').subscribe(
      (res) => {
        this.responseData = res;
        if (this.responseData.getGaleri) {
          this.getGaleri = this.responseData.getGaleri;
          // loading.dismiss();
        } else {
          this.getGaleri = '';
          // loading.dismiss();
        }
      },
      (err) => {
        console.log(err);
        // loading.dismiss();
      }
    );
  }

  openDetailGaleri(idGaleri: number) {
    const navExtras: NavigationExtras = {
      state: {
        idgaleri: idGaleri,
      },
    };
    this.router.navigate(['detailgaleri'], navExtras);
  }

  survey() {
    this.api.postData('Input_Survey',this.formSubmit.value)
    .subscribe(res => {
        this.navController.navigateBack('/tab');
      }, (err) => {
        console.log(err);
      });
      this.formSubmit.reset();
  }

  doRefresh(event) {
    this.api.getData('getSlider').subscribe((res) => {
      this.responseData = res;
      event.target.complete();
    });

    this.api.getData('getPromo').subscribe((res) => {
      this.responseData = res;
      event.target.complete();
    });

    this.api.getData('getEvent').subscribe((res) => {
      this.responseData = res;
      event.target.complete();
    });

    this.api.getData('getGaleri').subscribe((res) => {
      this.responseData = res;
      event.target.complete();
    });
  }
}
