import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-detail-member',
  templateUrl: './detail-member.page.html',
  styleUrls: ['./detail-member.page.scss'],
})
export class DetailMemberPage implements OnInit {
  datadetail: any;

  serverUrlAsset = this.api.serverUrlAsset;

  constructor(private act: ActivatedRoute, private rtr: Router, public api: ApiService) {
    if (this.rtr.getCurrentNavigation()) {
      this.datadetail = this.rtr.getCurrentNavigation().extras.state.member;
    }
    console.log(this.datadetail);
  }

  ngOnInit() {
  }

}
