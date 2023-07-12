import { Component, OnInit } from '@angular/core';
import { Locations } from 'src/app/models/locations';
import { LocationService } from './location.service';
import { environment } from 'src/environments/environment';
import { Auth } from 'src/app/auth/auth.interface';
import { AuthService } from 'src/app/auth/auth.service';
import { Preferiti } from 'src/app/models/preferiti';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  location!: Locations[];
  utente!: Auth | null;
  preferiti!: Preferiti[];

  locations: Locations[] | undefined;

  constructor(private locationsSrv: LocationService, private authSrv: AuthService) { }

  ngOnInit(): void {
    this.locationsSrv.recupera().subscribe((_locations: Locations[]) => {
      this.locations = _locations;
    });

    this.authSrv.user$.subscribe((_utente) => {
      this.utente = _utente;
    });

    /*   this.recuperaPreferiti(this.utente!.user.id);
      this.recuperaLocalita(); */
  }

  recuperaPreferiti(userId: number) {
    this.locationsSrv.recuperaPreferiti(userId).subscribe((likes: Preferiti[]) => {
      this.preferiti = likes;
    }
    )
  }

  aggiungiPreferito(idLocation: number) {
    const preferito: Preferiti = {
      userId: this.utente!.user.id,
      locationId: idLocation,
    };

    this.locationsSrv.aggiungiPreferito(preferito).subscribe(() => {
      this.recuperaPreferiti(this.utente!.user.id)
    })
  }

  eliminaPreferito(locationId: number): void {
    const idPrefe = this.getIdPreferito(locationId);
    if (idPrefe) {
      this.locationsSrv.rimuoviPreferito(idPrefe).subscribe(() => {
        this.recuperaPreferiti(this.utente!.user.id)
      });
    }
  }

  isPreferito(locationId: number): boolean {
    return this.preferiti.some((p) => p.locationId === locationId)
  }

  getIdPreferito(locationId: number): number | undefined {
    const preferito = this.preferiti.find((p) => p.locationId === locationId);
    return preferito?.id;
  }


}


/* recuperaPreferiti(){ } */


