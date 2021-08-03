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
      this.client = data;
      console.log(data);
    });
  }

  validation() {
    // eslint-disable-next-line max-len
    if(this.password !== undefined && this.cPassword !== undefined && (this.name !== undefined && this.name !== '') && (this.email !== undefined && this.email !== '')) {
      if(this.password !== this.cPassword){
        this.toast.showError('Password salah');
      } else {
        this.putEditClient();
      }
    } else {
      this.toast.showError('Field tidak boleh kosong');
    }
  }

  async putEditClient() {

    const data = {
      'id': this.client.id_member,
      'nama_member': (this.client.nama_member) ? this.name : '-',
      'email': (this.client.email) ? this.email : '-',
      'username': (this.client.username) ? this.client.username : '-',
      'password': this.password
    };

    await this.api.putData('Client/profil',data).subscribe((res: any) => {
      this.toast.showSuccess(res.status);
      this.dataClient();
    }, err => {
      this.toast.showError('Gagal edit profil');
      console.log(err);
    });
  }
}
