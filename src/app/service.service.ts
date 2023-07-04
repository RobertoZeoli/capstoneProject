import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Locations } from './models/locations';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  baseURL = environment.baseURL;

  constructor(private http:HttpClient) {}

  recupera(){
    return this.http.get<Locations[]>(`${this.baseURL}....`)
  }
}
