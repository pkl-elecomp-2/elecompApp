/* eslint-disable @typescript-eslint/member-ordering */
import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { HttpParams } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { error } from '@angular/compiler/src/util';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-detail-artikel',
  templateUrl: './detail-artikel.page.html',
  styleUrls: ['./detail-artikel.page.scss'],
})
export class DetailArtikelPage implements OnInit {

  private artikelId: any;
  private dataUser: any;
  deskripsiKomentar: any;
  artikel: any;
  comments: any;


  // eslint-disable-next-line @typescript-eslint/member-ordering
  serverUrlAsset = this.api.serverUrlAsset;

  constructor(
    private act: ActivatedRoute,
    public api: ApiService,
    public loadingController: LoadingController,
    private router: Router,
    private storage: Storage,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.artikelId = this.act.snapshot.paramMap.get('id');
    this.dataArtikel(this.artikelId);
    this.dataComment(this.artikelId);

    this.storage.get('dataUser').then(val => {
      this.dataUser = val;
      console.log(val);
    });
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

  async postComment() {

    const params = new HttpParams()
    .set('id_artikel', this.artikel.id_artikel)
    .set('nama_komentar', this.dataUser.nama_member)
    .set('email_komentar', this.dataUser.email)
    .set('no_tlp', this.dataUser.no_telepon)
    .set('tanggal_komentar', this.getDateNow())
    .set('deskripsi_komentar', this.deskripsiKomentar);

    console.log(this.getDateNow());

    await this.api.postData( 'Artikel/comment',params).subscribe((res: any) => {
      this.presentToast(res);
    }, err => {
      console.log(err);
    });
  }

  doRefresh(event) {
    this.dataArtikel(this.artikelId);
    this.dataComment(this.artikelId);
    event.target.complete();
  }

  getDateNow() {
    const date = new Date();
    const d = date.getDate();
    const mo = date.getMonth();
    const y = date.getFullYear();
    const h = date.getHours();
    const mi = date.getMinutes();
    const s = date.getSeconds();

    return `${y}-${mo}-${d} ${h}:${mi}:${s}`;
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

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
