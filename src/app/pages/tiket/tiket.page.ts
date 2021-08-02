import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-tiket',
  templateUrl: './tiket.page.html',
  styleUrls: ['./tiket.page.scss'],
})
export class TiketPage implements OnInit {

  cp = 1;
  no = 0;
  private tiket;

  constructor(
    private api: ApiService,
    public loadingController: LoadingController
    ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.dataTiket();
  }

  async dataTiket() {
    const loading = await this.loadingController.create({
      spinner: 'dots',
      message: 'Please Wait...',
    });
    await loading.present();
    await this.api.getData('Client/ticket').subscribe( (res) => {
      console.log(res);
      this.tiket = (res.tickets) ? res.tickets : '';
      loading.dismiss();
      },
      (err) => {
        console.log(err);
        loading.dismiss();
      }
    );
  }

  checkStatus(priority: any) {
    if(priority === '1'){
      return 'Closed';
    } else {
      return 'Awaiting your Reply';
    }
  }
}
