import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ArtikelService } from 'src/app/services/artikel.service';

@Component({
  selector: 'app-detail-artikel',
  templateUrl: './detail-artikel.page.html',
  styleUrls: ['./detail-artikel.page.scss'],
})
export class DetailArtikelPage implements OnInit {

  private artikelId: any;
  artikel: any;

  serverUrlAsset = this.api.serverUrlAsset;

  constructor(
    private act: ActivatedRoute, 
    public api: ApiService,
    public loadingController: LoadingController,
  ) {}

  ngOnInit() {
    this.artikelId = this.act.snapshot.paramMap.get('id');
    this.dataArtikel(this.artikelId);
  }

  async dataArtikel(id: number) {
    const loading = await this.loadingController.create({
      spinner: 'dots',
      message: 'Please Wait...',
    });
    await loading.present();

    await this.api.getData(`Artikel?id=${id}`).subscribe( (res) => {
      console.log(res.data[0]);
      this.artikel = (res.data[0]) ? res.data[0] : '';
      loading.dismiss(); 
      },
      (err) => {
        console.log(err);
        loading.dismiss();
      }
    );
  }

  doRefresh(event) {
    console.log('Begin async operation');
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
