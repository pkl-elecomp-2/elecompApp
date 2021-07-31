/* eslint-disable @typescript-eslint/member-ordering */
import { ApiService } from 'src/app/services/api.service';
import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { HttpParams } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { error } from '@angular/compiler/src/util';
import { ToastController } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast.service';

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

  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  private captchaPassed: boolean = false;
  private captchaResponse: string;

  constructor(
    private act: ActivatedRoute,
    public api: ApiService,
    private toast: ToastService,
    public loadingController: LoadingController,
    private router: Router,
    private storage: Storage,
    private toastController: ToastController,
    private zone: NgZone
  ) {}

  ngOnInit() {
    this.artikelId = this.act.snapshot.paramMap.get('id');
    this.dataArtikel(this.artikelId);
    this.dataComment(this.artikelId);

    this.storage.get('dataUser').then(val => {
      this.dataUser = val;
    });
  }

  captchaResolved(response: string): void{
    this.zone.run(()=>{
      this.captchaPassed = true;
      this.captchaResponse = response;
    });
    console.log('Ini response captcha '+ this.captchaResponse);
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

    // Get Data Comment from User
    const data = {
      'id_artikel': this.artikel.id_artikel,
      'nama_komentar': (this.dataUser.nama_member) ? this.dataUser.nama_member : '-',
      'email_komentar': (this.dataUser.email) ? this.dataUser.email : '-',
      'no_tlp': (this.dataUser.no_telepon_hp) ? this.dataUser.no_telepon_hp : '-',
      'deskripsi_komentar': this.deskripsiKomentar
    }

    // Send Comment Input to Server
    await this.api.postData( 'Artikel/comment',data).subscribe((res: any) => {
      this.toast.showSuccess(res.status);
      this.dataComment(this.artikelId);
    }, err => {
      this.toast.showError('Komentar gagal dikirim');
      console.log(err);
    });
  }

  checkCaptcha() {
    if(this.captchaPassed){
      this.postComment();
    } else {
      this.toast.showError('harap validasi captcha');
    }
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
