import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { Error404Component } from './components/error404/error404.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StereotipiOrealtaComponent } from './components/stereotipi-orealta/stereotipi-orealta.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChisiamoComponent } from './components/chisiamo/chisiamo.component';
import { LocationsComponent } from './components/locations/locations.component';
import { AuthGuard } from './auth/auth.guard';
import { PreferitiComponent } from './components/preferiti/preferiti.component';




const route: Route[]=[
  {
    path:'',
    redirectTo: 'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component: HomeComponent,
    children:[
      {
        path: 'locations',
        component: LocationsComponent,
      }
    ]
  },
  {
    path:'locations',
    component: LocationsComponent,
  },
  {
    path:'preferiti',
    component: PreferitiComponent,
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
    StereotipiOrealtaComponent,
    FooterComponent,
    ChisiamoComponent,
    LocationsComponent,
    PreferitiComponent,


  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
