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

  locations!: Locations[];
  utente!: Auth | null;
  preferiti!: Preferiti[];



  constructor(private locationsSrv: LocationService, private authSrv: AuthService) { }

  ngOnInit(): void {
    this.authSrv.user$.subscribe((_utente) => {
      this.utente = _utente;
    });

    setTimeout(() => {
      this.locationsSrv.recupera().subscribe((_locations: Locations[]) => {
        this.locations = _locations;
      });

      this.recuperaPreferiti(this.utente!.user.id);
    }, 1500)



  }



  recuperaPreferiti(userId: number): void {
    this.locationsSrv.recuperaPreferiti(userId).subscribe((likes: Preferiti[]) => {
      this.preferiti = likes;
    }
    );
  }

  aggiungiPreferito(idLocation: number): void {
    const preferito: Preferiti = {
      userId: this.utente!.user.id,
      locationId: idLocation,


      /* HO PROVATO AD AGGIUNGERE LE PROPRIETA IMMAGINE E NOME CON CAMPO VUOTO E ALMENO MI VISUALIZZA LE CARD VUOTE */
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

  isPreferito(localitaId: number): boolean {
    return this.preferiti.some((p) => p.locationId === localitaId);
  }

  getIdPreferito(localitaId: number): number | undefined {
    const preferito = this.preferiti.find((p) => p.locationId === localitaId);
    return preferito?.id;
  }


}


