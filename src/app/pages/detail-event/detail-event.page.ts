import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.page.html',
  styleUrls: ['./detail-event.page.scss'],
})
export class DetailEventPage implements OnInit {

  datadetail: any;

  constructor(private act: ActivatedRoute, private rtr: Router) {
    if (this.rtr.getCurrentNavigation()) {
      this.datadetail = this.rtr.getCurrentNavigation().extras.state.idevent;
    }
    // console.log(this.datadetail)
  }

  ngOnInit() {
  }

}
