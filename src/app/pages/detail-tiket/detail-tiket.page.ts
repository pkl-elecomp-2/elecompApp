import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-tiket',
  templateUrl: './detail-tiket.page.html',
  styleUrls: ['./detail-tiket.page.scss'],
})
export class DetailTiketPage implements OnInit {

  cp = 1;

  constructor() { }

  ngOnInit() {
  }

  showFormReply() {
    document.getElementById('form-reply').style.display = 'block';
  }

}
