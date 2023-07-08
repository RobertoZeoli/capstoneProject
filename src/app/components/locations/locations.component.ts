import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { Locations } from 'src/app/models/locations';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  locations: Locations[] | undefined;

  constructor(private locationsSrv: ServiceService) { }

  ngOnInit(): void {
    this.locationsSrv.recupera().subscribe((_locations: Locations[])=>{
      this.locations = _locations;
    })
  }

}
