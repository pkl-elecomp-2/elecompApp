import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-artikel',
  templateUrl: './artikel.page.html',
  styleUrls: ['./artikel.page.scss'],
})
export class ArtikelPage implements OnInit {

  getArtikel: any;

  serverUrlAsset = this.api.serverUrlAsset;

  constructor(
    public api: ApiService,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private router: Router
  ) { }

  async ngOnInit() {}

  ionViewWillEnter() {
    this.dataArtikel();
  };

  async dataArtikel() {
    const loading = await this.loadingController.create({
      spinner: 'dots',
      message: 'Please Wait...',
    });
    await loading.present();
    await this.api.getData('Artikel').subscribe( (res) => {
      console.log(res);
      this.getArtikel = (res.data) ? res.data : '';
      loading.dismiss();
      },
      (err) => {
        console.log(err);
        loading.dismiss();
      }
    );
  }

  openDetail(idArtikel) {
    this.router.navigateByUrl(`tab/artikel/${idArtikel}`);
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

  doRefresh(event){
    this.dataArtikel();
    event.target.complete();
  }
}
