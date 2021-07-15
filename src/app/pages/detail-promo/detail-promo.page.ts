import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-promo',
  templateUrl: './detail-promo.page.html',
  styleUrls: ['./detail-promo.page.scss'],
})
export class DetailPromoPage implements OnInit {

  datadetail: any;
  constructor(private act: ActivatedRoute, private rtr: Router) {
      if (this.rtr.getCurrentNavigation()) {
        this.datadetail = this.rtr.getCurrentNavigation().extras.state.idpromo;
      }
      console.log(this.datadetail);
  }

  ngOnInit() {
  }

}
