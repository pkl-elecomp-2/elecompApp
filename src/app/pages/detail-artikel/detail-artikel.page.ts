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

}
