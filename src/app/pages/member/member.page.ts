import { Storage } from '@ionic/storage-angular';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { AlertController } from '@ionic/angular';
import { NgZone } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs';
import { ListmemberService, SearchType } from 'src/app/services/listmember.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.page.html',
  styleUrls: ['./member.page.scss'],
})
export class MemberPage implements OnInit {
  responseData: any;
  getMember: any;
  getMemberUI: any;
  jsonData: any = [];
  results: Observable<any>;
  searchTerm ='';
  textCari;
  type: SearchType = SearchType.all;

  serverUrlAsset = this.api.serverUrlAsset;

  constructor(
    public api: ApiService,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private router: Router,
    private storage: Storage,
    private zone: NgZone,
    private toastService: ToastService,
    private listmemberService: ListmemberService
  ) { }

  ngOnInit() {}

  ionViewWillEnter() {
    // Check if user is logged in
    // this.storage.get('user').then((value) => {
    //   if (value == '' || value == null) {
    //     this.toastService.showWarning('Please login first');
    //     this.router.navigateByUrl('/login');
    //   }
    // });
    // Load data Member
    this.dataMember();
  }

  async dataMember() {
    const loading = await this.loadingController.create({
      spinner: 'dots',
      message: 'Loading...',
    });
    await loading.present();
    await this.api.getData('getMember').subscribe(
      (res) => {
        this.responseData = res;
        // console.log(res);

        if (this.responseData.getMember) {
          this.getMember = this.responseData.getMember;
          if(this.textCari) {return;}
          this.getMemberUI = this.getMember;
          loading.dismiss();
        } else {
          this.getMember = '';
          loading.dismiss();
        }
      },
      (err) => {
        console.log(err);
        loading.dismiss();
      }
    );
  }

  searchChanged(){
    this.results = this.listmemberService.searchData(this.searchTerm);
  }

  openDetail(idMember) {
    const navExtras: NavigationExtras = {
      state: {
        member: idMember,
      },
    };
    this.router.navigate(['detailmember'], navExtras);
  }

  filterJSONData(ev: any) {
    this.initializaJSONData();
    const val = ev.target.value;
    if (val && val.trim() !== '') {
      // eslint-disable-next-line arrow-body-style
      this.jsonData = this.jsonData.filter((item) => {
        return item.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    }
  }

  inputPress(e){
    if((e.key === 'Enter' || e.keyCode === 13) && this.textCari){
      if(this.getMemberUI.length === 1){
        // this.bpbPilih = this.bpbUi[0]
      }
      e.target.select();
    }
  }

  async cariOnInput(){
    console.log('cari',this.getMemberUI);
    if(!this.textCari || this.textCari === '') {return this.getMemberUI = this.getMember;}
    // eslint-disable-next-line arrow-body-style
    this.getMemberUI = this.getMember.filter(v => {
      return v.nama_member.toLowerCase().includes(this.textCari.toLowerCase()) ||
      v.no_anggota.toLowerCase().includes(this.textCari.toLowerCase()) ||
      v.profesi_member.toLowerCase().includes(this.textCari.toLowerCase());
    });
  }

  cariOnCancel(){
    this.getMemberUI = this.getMember;
  }

  initializaJSONData() {
    this.jsonData = [
      {
        name: 'Laila Andana',
        code: 'LA',
      },
      {
        name: 'Luis Devvi',
        code: 'LD',
      },
      {
        name: 'Wika Hardiyanto',
        code: 'WH',
      },
      {
        name: 'Udin',
        code: 'U',
      },
      {
        name: 'Miftahul Riski',
        code: 'MR',
      },
      {
        name: 'Milatnia',
        code: 'M',
      },
      {
        name: 'Yurike',
        code: 'Y',
      },
      {
        name: 'Pasha Annesa',
        code: 'U',
      },
    ];
  }

  doRefresh(event) {
    console.log('Begin async operation');

      event.target.complete();

  }
}
