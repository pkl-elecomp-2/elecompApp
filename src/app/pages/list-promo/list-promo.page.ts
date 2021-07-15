import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-list-promo',
  templateUrl: './list-promo.page.html',
  styleUrls: ['./list-promo.page.scss'],
})
export class ListPromoPage implements OnInit {

  responseData: any;
  getPromo: any;
  getPromoTomorrow: any;
  getPromoYesterday: any;

  constructor(
    private api: ApiService,
    private loadingController: LoadingController,
    private router: Router
    ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.dataPromo();
    this.dataPromoTomorrow();
    this.dataPromoYesterday();
  }

  async dataPromo() {
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();
    await this.api.getData('getPromo')
      .subscribe(res => {
        this.responseData=res;
        if(this.responseData.getPromo){
          this.getPromo=this.responseData.getPromo;
          loading.dismiss();
        }
        else{
          this.getPromo='';
          loading.dismiss();
       }
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

  async dataPromoTomorrow() {
    // const loading = await this.loadingController.create({
    //   message: 'Loading...'
    // });
    // await loading.present();
    // await this.api.Get_Data('getPromoTomorrow')
    this.api.getData('getPromoTomorrow')
      .subscribe(res => {
        this.responseData=res;
        if(this.responseData.getPromoTomorrow){
          this.getPromoTomorrow=this.responseData.getPromoTomorrow;
          // loading.dismiss();
        }
        else{
          this.getPromoTomorrow='';
          // loading.dismiss();
       }
      }, err => {
        console.log(err);
        // loading.dismiss();
      });
  }

  async dataPromoYesterday() {
    // const loading = await this.loadingController.create({
    //   message: 'Loading...'
    // });
    // await loading.present();
    // await this.api.Get_Data('getPromoYesterday')
    this.api.getData('getPromoYesterday')
      .subscribe(res => {
        this.responseData=res;
        if(this.responseData.getPromoYesterday){
          this.getPromoYesterday=this.responseData.getPromoYesterday;
          // loading.dismiss();
        }
        else{
          this.getPromoYesterday='';
          // loading.dismiss();
       }
      }, err => {
        console.log(err);
        // loading.dismiss();
      });
  }

  openDetail(idPromo){
    const navExtras: NavigationExtras = {
      state : {
        idpromo : idPromo,
      }
    };
    this.router.navigate(['detailpromo'], navExtras);
  }

}
