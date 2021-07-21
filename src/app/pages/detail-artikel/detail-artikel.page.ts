import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtikelService } from 'src/app/services/artikel.service';

@Component({
  selector: 'app-detail-artikel',
  templateUrl: './detail-artikel.page.html',
  styleUrls: ['./detail-artikel.page.scss'],
})
export class DetailArtikelPage implements OnInit {

  private dataDetail: any;
  private detail: any;

  // eslint-disable-next-line @typescript-eslint/member-ordering
  serverUrlAsset = this.api.serverUrlAsset;

  constructor(private act: ActivatedRoute, private router: Router, public api: ArtikelService) {
    if (this.router.getCurrentNavigation()) {
      this.dataDetail = this.router.getCurrentNavigation().extras.state.artikel;
    }
    console.log(this.dataDetail);

    if (this.router.getCurrentNavigation()) {
      this.detail = this.router.getCurrentNavigation().extras.state.member;
    }
    console.log(this.detail);
  }

  ngOnInit() {}

  doRefresh(event) {
    console.log('Begin async operation');
  }

  formatDate(date) {
    const d = new Date(date);
        let month = '' + (d.getMonth() + 1);
        let day = '' + d.getDate();
        const year = d.getFullYear();

    if(month.length < 2)
        {month = '0' + month;}
    if(day.length < 2)
        {day = '0' + day;}

    return [day, month, year].join('-');
}

}
