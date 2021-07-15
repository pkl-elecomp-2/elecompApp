import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-tentang',
  templateUrl: './tentang.page.html',
  styleUrls: ['./tentang.page.scss'],
})
export class TentangPage implements OnInit {

  responseData: any;
  getTentang: any;

  constructor(
    public api: ApiService,
    public loadingController: LoadingController) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.dataTentang();
  }

  async dataTentang() {
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();
    await this.api.getData('getTentang')
      .subscribe(res => {
        this.responseData=res;
        console.log(res);

        if(this.responseData.getTentang){
          this.getTentang=this.responseData.getTentang;
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
