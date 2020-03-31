import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recarga-telefonica',
  templateUrl: './recarga-telefonica.page.html',
  styleUrls: ['./recarga-telefonica.page.scss'],
})
export class RecargaTelefonicaPage implements OnInit {
  public appPages = [
    {
      title: 'Dados recarga',
      url: 'dados-recarga',
      icon: ''
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

