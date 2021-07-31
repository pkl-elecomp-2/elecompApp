/* eslint-disable @typescript-eslint/naming-convention */
import { Storage } from '@ionic/storage-angular';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.page.html',
  styleUrls: ['./edit-client.page.scss'],
})
export class EditClientPage implements OnInit {

  name: any;
  email: any;

  serverUrlAsset = this.api.serverUrlAsset;

  private password: any;
  private cPassword: any;
  private client: any;

  constructor(
    public api: ApiService,
    public loadingController: LoadingController,
    private storage: Storage,
    private toast: ToastService
  ) { }

  ngOnInit() {}

  ionViewWillEnter(){
    this.dataClient();
  }

  async dataClient() {
    this.storage.get('dataUser').then( (data) => {
      this.name = data.nama_member;
      this.email = data.email;
    });
  }

  validation() {
    if(this.password !== undefined && this.cPassword !== undefined) {
      if(this.password !== this.cPassword){
        this.toast.showError('Password salah');
      } else {
        this.toast.showSuccess('berhasil');
        console.log(this.password, this.cPassword);
      }
    } else {
      this.toast.showError('Password tidak boleh kosong');
    }
  }

  async postEditClient() {

    const data = {

    };
  }
}
