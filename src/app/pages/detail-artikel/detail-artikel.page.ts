import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtikelService } from 'src/app/services/artikel.service';

@Component({
  selector: 'app-detail-artikel',
  templateUrl: './detail-artikel.page.html',
  styleUrls: ['./detail-artikel.page.scss'],
})
export class DetailArtikelPage implements OnInit {

  datadetail: any;
  detail2: any;

  serverUrlAsset = this.api.serverUrlAsset;

  constructor(private act: ActivatedRoute, private rtr: Router, public api: ArtikelService) {
    if (this.rtr.getCurrentNavigation()) {
      this.datadetail = this.rtr.getCurrentNavigation().extras.state.artikel;
    }
    console.log(this.datadetail);

    if (this.rtr.getCurrentNavigation()) {
      this.detail2 = this.rtr.getCurrentNavigation().extras.state.member;
    }
    console.log(this.detail2);
  }

  ngOnInit() {}

  doRefresh(event) {
    console.log('Begin async operation');
  }

}
