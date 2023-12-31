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
  utente!: Auth | null;
  isLogged!: boolean;

  constructor(private authSrv: AuthService,) {
    /* this.emptyLocalStorage = localStorage.length === 0; */
    /* this.emptyLocalStorage = localStorage.getItem("utente")?.length === 0; */
    this.authSrv.user$.subscribe((_utente) => {
      this.utente = _utente;
    })
  }

  ngOnInit(): void {
    /*  if (localStorage.getItem("utente")) {
       this.emptyLocalStorage = false
     } else this.emptyLocalStorage = true
     console.log(this.emptyLocalStorage) */
    this.authSrv.user$.subscribe(data => {
      console.log(data);
      if (data !== null) {
        this.isLogged = true
      } else this.isLogged = false
    })

  }

  logout() {
    this.authSrv.logout();
  }
}
