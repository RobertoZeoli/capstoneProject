import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { Error404Component } from './components/error404/error404.component';
import { TodoComponent } from './components/todo/todo.component';
import { CompletedComponent } from './components/completed/completed.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StereotipiOrealtaComponent } from './components/stereotipi-orealta/stereotipi-orealta.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChisiamoComponent } from './components/chisiamo/chisiamo.component';



const route: Route[]=[
  {
    path:'',
    redirectTo: 'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component: HomeComponent,
  },
  {
    path:'todo',
    component: TodoComponent,
  },
  {
    path:'login',
    component: LoginComponent,
    children:[
      {
        path:'register',
        component: RegisterComponent,
      },
    ]
  },
  {
    path:'register',
    component: RegisterComponent,
  },
  {
    path:'stereOrealta',
    component: StereotipiOrealtaComponent,
  },
  {
    path:'chiSiamo',
    component: ChisiamoComponent,
  },
  {
    path:'**',
    component: Error404Component,
  },
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    Error404Component,
    TodoComponent,
    CompletedComponent,
    StereotipiOrealtaComponent,
    FooterComponent,
    ChisiamoComponent,


  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { Locations } from 'src/app/models/locations';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  locations: Locations[] | undefined;

  constructor(private locationSrv:ServiceService) { }

  ngOnInit(): void {
    this.locationSrv.recupera().subscribe((_locations:Locations[])=>{
      this.locations = _locations;
    })

  }

}
*/
