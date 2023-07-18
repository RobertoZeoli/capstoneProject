import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Locations } from 'src/app/models/locations';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/auth/auth.service';
import { Preferiti } from 'src/app/models/preferiti';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  baseUrl = environment.baseURL;

  constructor(private http: HttpClient, private authSrv: AuthService) { }

  /* questo recupera() popola le card */
  recupera() {
    return this.http.get<Locations[]>(`${this.baseUrl}localita`)
  }

  recuperaPreferiti(userId: number) {
    return this.http.get<Preferiti[]>(`${this.baseUrl}preferiti?userId=${userId}`)
  }

  /* recuperaLocalita() {
    return this.http.get<Locations[]>(`${this.baseUrl}id`)
  } */

  aggiungiPreferito(preferito: Preferiti) {
    return this.http.post(`${this.baseUrl}preferiti`, preferito)
  }

  rimuoviPreferito(preferitoId: number) {
    return this.http.delete(`${this.baseUrl}preferiti/${preferitoId}`)
  }

  dettaglioPreferito(id: number) {
    return this.http.get<Locations>(`${this.baseUrl}localita/${id}`)
  }

}

