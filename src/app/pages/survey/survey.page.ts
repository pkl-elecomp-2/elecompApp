/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, NgZone } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { Router, NavigationExtras } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.page.html',
  styleUrls: ['./survey.page.scss'],
})
export class SurveyPage implements OnInit {

  nama;
  email;
  noWa;
  pesan;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  public FormSubmit: FormGroup;

  isLoading = false;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  ResponseData: any;

  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  private captchaPassed: boolean = false;
  private captchaResponse: string;

  constructor(
    private api: ApiService,
    public loadingController: LoadingController,
    private router: Router,
    // eslint-disable-next-line @typescript-eslint/no-shadow
    private FormBuilder: FormBuilder,
    private zone: NgZone,
    public navCtrl: NavController,
    public alertController: AlertController,
  ) {
    this.FormSubmit = this.FormBuilder.group({
      nama: ['', Validators.required],
      email: ['', Validators.required],
      no_tlp: ['', Validators.required],
      deskripsi_survey: ['', Validators.required],
      // recaptcha: ['', Validators.required]
    });
  }

  ngOnInit() {

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: 'Terima kasih telah mengisi survey',
      buttons: ['OK']
    });

    alert.present();
  }

  ionViewWillEnter() {
  }

  captchaResolved(response: string): void{
    this.zone.run(()=>{
      this.captchaPassed = true;
      this.captchaResponse = response;
    });
    console.log('Ini response captcha '+ this.captchaResponse);
  }


  survey() {
    this.api.postData('Client/survey',this.FormSubmit.value)
    .subscribe(res => {
        this.navCtrl.navigateBack('/member/survey');
        // window.location.reload();
      }, (err) => {
        console.log(err);
      });
      this.FormSubmit.reset();
  }

  doRefresh(event) {
    console.log('Begin async operation');
  }
}
