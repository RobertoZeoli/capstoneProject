import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { Error404Component } from './components/error404/error404.component';
import { TodoComponent } from './components/todo/todo.component';
import { CompletedComponent } from './components/completed/completed.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    path:'**',
    component: Error404Component,
  },
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    WelcomeComponent,
    HomeComponent,
    RegisterComponent,
    Error404Component,
    TodoComponent,
    CompletedComponent
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
