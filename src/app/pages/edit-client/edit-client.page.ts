import { Storage } from '@ionic/storage-angular';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.page.html',
  styleUrls: ['./edit-client.page.scss'],
})
export class EditClientPage implements OnInit {

  client: any;
  name: any;
  email:any;

  serverUrlAsset = this.api.serverUrlAsset;

  constructor(
    public api: ApiService,
    public loadingController: LoadingController,
    private storage: Storage
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
}
