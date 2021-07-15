import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-list-galeri',
  templateUrl: './list-galeri.page.html',
  styleUrls: ['./list-galeri.page.scss'],
})
export class ListGaleriPage implements OnInit {

  responseData: any;
  getGaleri: any;

  constructor(
    public api: ApiService,
    public loadingController: LoadingController,
    private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.dataGaleri();
  }

  async dataGaleri() {
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();
    await this.api.getData('getGaleri')
      .subscribe(res => {
        this.responseData=res;
        if(this.responseData.getGaleri){
          this.getGaleri=this.responseData.getGaleri;
          loading.dismiss();
        }
        else{
          this.getGaleri='';
          loading.dismiss();
       }
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

  openDetail(idGaleri){
    const navExtras: NavigationExtras = {
      state : {
        idgaleri : idGaleri,
      }
    };
    this.router.navigate(['detailgaleri'], navExtras);
  }
}
