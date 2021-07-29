import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  responseData: any;
  getTentang: any;

  constructor(
    public api: ApiService,
    public loadingController: LoadingController) { }

  ionViewWillEnter(){
    this.dataTentang();
  }

  ngOnInit() {}

  async dataTentang() {
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();
    await this.api.getData('Tentang')
      .subscribe(res => {
        this.responseData=res;
        console.log(this.responseData.data);

        if(this.responseData){
          this.getTentang=this.responseData.data;
          loading.dismiss();
        }
        else{
          this.getTentang='';
          loading.dismiss();
       }
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
}
