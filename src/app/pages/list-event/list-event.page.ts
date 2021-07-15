import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.page.html',
  styleUrls: ['./list-event.page.scss'],
})
export class ListEventPage implements OnInit {

  responseData: any;
  getEvent: any;
  getEventTomorrow: any;
  getEventYesterday: any;

  constructor(
    public api: ApiService,
    public loadingController: LoadingController,
    private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.dataEvent();
    this.dataEventTomorrow();
    this.dataEventYesterday();
  }

  async dataEvent() {
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();
    await this.api.getData('getEvent')
      .subscribe(res => {
        this.responseData=res;
        if(this.responseData.getEvent){
          this.getEvent=this.responseData.getEvent;
          loading.dismiss();
        }
        else{
          this.getEvent='';
          loading.dismiss();
       }
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

  async dataEventTomorrow() {
    // const loading = await this.loadingController.create({
    //   message: 'Loading...'
    // });
    // await loading.present();
    // await this.api.Get_Data('getEvent')
    this.api.getData('getEventTomorrow')
      .subscribe(res => {
        this.responseData=res;
        if(this.responseData.getEventTomorrow){
          this.getEventTomorrow=this.responseData.getEventTomorrow;
          // loading.dismiss();
        }
        else{
          this.getEventTomorrow='';
          // loading.dismiss();
       }
      }, err => {
        console.log(err);
        // loading.dismiss();
      });
  }

  async dataEventYesterday() {
    // const loading = await this.loadingController.create({
    //   message: 'Loading...'
    // });
    // await loading.present();
    // await this.api.Get_Data('getEvent')
    this.api.getData('getEventYesterday')
      .subscribe(res => {
        this.responseData=res;
        if(this.responseData.getEventYesterday){
          this.getEventYesterday=this.responseData.getEventYesterday;
          // loading.dismiss();
        }
        else{
          this.getEventYesterday='';
          // loading.dismiss();
       }
      }, err => {
        console.log(err);
        // loading.dismiss();
      });
  }

  openDetail(idEvent){
    const navExtras: NavigationExtras = {
      state : {
        idevent : idEvent,
      }
    };
    this.router.navigate(['detailevent'], navExtras);
  }
}
