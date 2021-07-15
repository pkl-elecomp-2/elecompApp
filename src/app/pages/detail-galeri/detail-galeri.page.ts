import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-galeri',
  templateUrl: './detail-galeri.page.html',
  styleUrls: ['./detail-galeri.page.scss'],
})
export class DetailGaleriPage implements OnInit {

  datadetail: any;

  constructor(private act: ActivatedRoute, private rtr: Router) {
    if (this.rtr.getCurrentNavigation()) {
      this.datadetail = this.rtr.getCurrentNavigation().extras.state.idgaleri;
    }
    // console.log(this.datadetail)
  }
  ngOnInit() {
  }

}
