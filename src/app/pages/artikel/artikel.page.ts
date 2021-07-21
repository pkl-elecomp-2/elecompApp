import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ArtikelService } from 'src/app/services/artikel.service';
import { AlertController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-artikel',
  templateUrl: './artikel.page.html',
  styleUrls: ['./artikel.page.scss'],
})
export class ArtikelPage implements OnInit {

  response: any;
  getArtikel: any;
  getMember: any;
  jsonData: any = [];
  jumlahPengunjung;

  serverUrlAsset = this.api.serverUrlAsset;

  constructor(
    public api: ArtikelService,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private router: Router
  ) { }

  async ngOnInit() {
  }

  ionViewWillEnter() {
    this.dataArtikel();
  };

  async dataArtikel() {
    const loading = await this.loadingController.create({
      spinner: 'dots',
      message: 'Please Wait...',
    });
    await loading.present();
    await this.api.getArticle('getArtikel').subscribe(
      (res) => {
        this.response = res;
        console.log(res);
        if (this.response.getArtikel) {
          this.getArtikel = this.response.getArtikel;
          console.log('Masuk sini');
          loading.dismiss();
        } else {
          this.getArtikel = '';
          loading.dismiss();
        }
      },
      (err) => {
        console.log(err);
        loading.dismiss();
      }
    );
  }

  openDetail(idArtikel) {
    const navExtras: NavigationExtras = {
      state: {
        artikel: idArtikel,
      },
    };

    const dataUpdate = {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      artikel_id : idArtikel.id_artikel,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      jumlah_pengunjung : 1
    };

    this.api.updateCountArticle(dataUpdate).then(res => {
      this.router.navigate(['detailartikel'], navExtras);
    }, (error) => {
      console.log(error);
    });
  }

  formatDate(date) {
    const d = new Date(date);
        let month = '' + (d.getMonth() + 1);
        let day = '' + d.getDate();
        const year = d.getFullYear();

    if(month.length < 2)
        {month = '0' + month;}
    if(day.length < 2)
        {day = '0' + day;}

    return [day, month, year].join('-');
}

}
