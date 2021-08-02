import { Storage } from '@ionic/storage-angular';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { AlertController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.page.html',
  styleUrls: ['./member.page.scss'],
})
export class MemberPage implements OnInit {

  memberName: any;
  memberPhoto: any;

  serverUrlAsset = this.api.serverUrlAsset;

  constructor(
    public api: ApiService,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private router: Router,
    private storage: Storage,
    private toast: ToastService
  ) { }

  ngOnInit() {}

  ionViewWillEnter() {
    // Load data Member
    this.dataMember();
  }

  async dataMember() {
    const loading = await this.loadingController.create({
      spinner: 'dots',
      message: 'Loading...',
    });
    await loading.present();
    // Load Data from storage
    this.storage.get('dataUser').then((data) => {
      this.memberName = data.nama_member;
      this.memberPhoto = data.foto_kta;
    });
    loading.dismiss();
  }

  openDetail(idMember) {
    const navExtras: NavigationExtras = {
      state: {
        member: idMember,
      },
    };
    this.router.navigate(['detailmember'], navExtras);
  }

  logOut() {
    this.storage.set('user', '');
    // window.location.reload();
    this.toast.showSuccess('Logout Success');
    this.router.navigate(['tab/beranda']);
    // this.reloadCurrentRoute();
  }

  doRefresh(event) {
    console.log('Begin async operation');
      event.target.complete();
  }
}
