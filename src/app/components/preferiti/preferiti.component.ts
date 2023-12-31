import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/auth/auth.interface';
import { AuthService } from 'src/app/auth/auth.service';
import { Locations } from 'src/app/models/locations';
import { LocationService } from '../locations/location.service';
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


  constructor(private authSrv: AuthService, private locationSrv: LocationService) {
    this.authSrv.user$.subscribe((_utente) => {
      this.utente = _utente;

      if (this.utente) {
        this.userId = this.utente.user.id;
        this.recuperaPreferitiEStampa();
      }
    });
  }

  ngOnInit(): void { }

  recuperaPreferitiEStampa() {
    this.locationSrv.recuperaPreferiti(this.userId).subscribe((likes: Preferiti[]) => {
      this.preferiti = likes;

      this.stampaPreferiti();
    })
  }

  stampaPreferiti() {
    this.preferiti.forEach((loc) => {
      if (loc.locationId) {
        this.locationSrv.dettaglioPreferito(loc.locationId).subscribe((stampa) => {
          this.locations.push(stampa)
        })
      }
    })
  }
}
