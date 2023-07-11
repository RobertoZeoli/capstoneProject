import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  backgroundBanner!: string;


  constructor() { }

  ngOnInit(): void {
    this.changeBackgroundBanner();
  }

  changeBackgroundBanner() {
    const listaPubblicita = [
      'url("https://thealgoristsblob.blob.core.windows.net/thealgoristsimages/stackoverflow.png")',
      'url("https://miro.medium.com/v2/resize:fit:1358/0*wuNf24urnMp7ypDp.png")',
      'url("https://wordpress.startsteps.org/wp-content/uploads/2022/10/EPICODE_logo.png")'
    ];

    const randomBanner = Math.floor(Math.random() * listaPubblicita.length);
    this.backgroundBanner = listaPubblicita[randomBanner];

    setTimeout(() => {
      this.changeBackgroundBanner();
    }, 3000);
  }
}
