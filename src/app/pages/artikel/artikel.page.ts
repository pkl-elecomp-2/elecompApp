import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ArtikelService } from 'src/app/services/artikel.service';
import { AlertController } from '@ionic/angular';
import { NgZone } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-artikel',
  templateUrl: './artikel.page.html',
  styleUrls: ['./artikel.page.scss'],
})
export class ArtikelPage implements OnInit {

  responseData: any;
  getArtikel: any;
  getMember: any;
  jsonData: any = [];
  jumlahPengunjung;

  serverUrlAsset = this.api.serverUrlAsset;

  constructor(
    public api: ArtikelService,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private router: Router,
    private zone: NgZone,
    private storage: Storage
  ) { }

  async ngOnInit() {
  }

  ionViewWillEnter() {
    this.dataArtikel();
    // console.log(this.storage.get('currentUser'));
  };

  async dataArtikel() {
    const loading = await this.loadingController.create({
      spinner: 'dots',
      message: 'Please Wait...',
    });
    await loading.present();
    await this.api.getArticle('getArtikel').subscribe(
      (res) => {
        this.responseData = res;
        // console.log(res);
        if (this.responseData.getArtikel) {
          this.getArtikel = this.responseData.getArtikel;
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

    //console.log('id_artikel',dataUpdate);
    // console.log('dataUpdate',dataUpdate['jumlah_pengunjung']);

    this.api.updateCountArticle(dataUpdate)
    .then(res => {
      this.router.navigate(['detailartikel'], navExtras);
     // console.log('Content updated successfully!');
    }, (error) => {
      console.log(error);
    });
  }

}
