import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-detail-promo',
  templateUrl: './detail-promo.page.html',
  styleUrls: ['./detail-promo.page.scss'],
})
export class DetailPromoPage implements OnInit {

  promoId: any;
  promo: any;

  serverUrlAsset = this.api.serverUrlAsset;

  constructor(
    private api: ApiService, 
    private act: ActivatedRoute,
    public loadingController: LoadingController,
    ) {}

  ngOnInit() {
    this.promoId = this.act.snapshot.paramMap.get('id');
    this.dataPromo(this.promoId);
  }

  async dataPromo(id: number) {
    const loading = await this.loadingController.create({
      spinner: 'dots',
      message: 'Please Wait...',
    });
    await loading.present();
    await this.api.getData(`Promo?id=${id}`).subscribe( (res) => {
      console.log(res);
      this.promo = (res) ? res : '';
      loading.dismiss();
      },
      (err) => {
        console.log(err);
        loading.dismiss();
      }
    );
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
