import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  backgroundImages: string[]=[
    'https://cdn.travelpulse.com/images/31aaedf4-a957-df11-b491-006073e71405/bb73aab8-f2bf-4278-88c3-33dd628df23f/630x355.jpg',
    'https://i0.wp.com/handluggageonly.co.uk/wp-content/uploads/2016/03/Positano-Weather.jpg?fit=1600%2C1066&ssl=1',
    'https://www.unitremilano.it/wp-content/uploads/2019/04/Il-Duomo-di-Milano.jpg',
    'https://sofitel.accor.com/destinations/imagerie/florence-city-photo-1400x787-877d_1400x788.jpg',
    'https://images.musement.com/cover/0002/45/turin-jpg_header-144980.jpeg',
    'https://s27363.pcdn.co/wp-content/uploads/2022/09/Lago-di-Braies-Dolomites.jpg.optimal.jpg',
    'https://www.sicilia.info/wp-content/uploads/sites/91/agrigento-valle-dei-templi.jpg',
    'https://www.fulltravel.it/wp-content/uploads/2018/11/Venezia-Canale-Grande.jpg'
  ];

  currentImageIndex = 0;

  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{
      this.changeBackground();
    },4000)
  }

  changeBackground(){
    const randomIndex = Math.floor(Math.random() * this.backgroundImages.length);
    this.currentImageIndex = randomIndex;
  }
}
