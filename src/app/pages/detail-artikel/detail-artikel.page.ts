/* eslint-disable @typescript-eslint/member-ordering */
import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-detail-artikel',
  templateUrl: './detail-artikel.page.html',
  styleUrls: ['./detail-artikel.page.scss'],
})
export class DetailArtikelPage implements OnInit {

  private artikelId: any;
  artikel: any;
  comments: any;

  // eslint-disable-next-line @typescript-eslint/member-ordering
  serverUrlAsset = this.api.serverUrlAsset;

  constructor(
    private act: ActivatedRoute,
    public api: ApiService,
    public loadingController: LoadingController,
    private router: Router
  ) {}

  ngOnInit() {
    this.artikelId = this.act.snapshot.paramMap.get('id');
    this.dataArtikel(this.artikelId);
    this.dataComment(this.artikelId);
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

  async dataComment(id: number) {
    await this.api.getData(`Artikel/comment?id=${id}`).subscribe( (res) => {
      this.comments = (res.data) ? res.data : '';
      },
      (err) => { console.log(err); }
    );
  }

  doRefresh(event) {
    this.dataArtikel(this.artikelId);
    this.dataComment(this.artikelId);
    event.target.complete();
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

  back(){
      const currentUrl = 'tab/artikel';
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate([currentUrl]);
      });
  }
}
