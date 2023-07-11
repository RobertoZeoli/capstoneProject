import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/auth/auth.interface';
import { AuthService } from 'src/app/auth/auth.service';
import { Locations } from 'src/app/models/locations';
import { ServiceService } from 'src/app/service.service';
import { Preferiti } from 'src/app/models/preferiti';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrls: ['./preferiti.component.scss']
})
export class PreferitiComponent implements OnInit {

  locations: Locations[] = [];

  utente!: Auth | null;
  preferiti: Preferiti[] = [];
  userId!: number;


  constructor(private authSrv: AuthService, private locationSrv: ServiceService) {
    this.authSrv.user$.subscribe((_utente) => {
      this.utente = _utente;
    });
    this.userId = this.utente!.user.id;
  }

  ngOnInit(): void {
    /* this.locationSrv.recuperaPreferiti(this.userId).subscribe((likes: Preferiti[]) => {
      this.preferiti = likes;
    });
    setTimeout(() => {
      this.stampaPreferiti();
    }, 500);  */
  }

  stampaPreferiti() {
    /* this.preferiti.forEach((location) => {
      if (location.locationId) {
        this.locationSrv.dettaglioLocation(location.movieId).subscribe((dettaglio) => {
          this.locationSrv.push(dettaglio);
        })
      }
    }) */
  }

}
