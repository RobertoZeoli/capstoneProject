import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/auth/auth.interface';
import { AuthService } from 'src/app/auth/auth.service';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  emptyLocalStorage!: boolean;

  constructor(private authSrv: AuthService) {
    this.emptyLocalStorage = localStorage.length === 0;
    /* this.emptyLocalStorage = localStorage.getItem("utente")?.length === 0; */

  }

  ngOnInit(): void {
    /*  if (localStorage.getItem("utente")) {
       this.emptyLocalStorage = false
     } else this.emptyLocalStorage = true
     console.log(this.emptyLocalStorage) */
  }

  logout() {
    this.authSrv.logout();
  }

}
