import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from "@angular/material";
import { AccountsModule } from 'angular2-meteor-accounts-ui';

import Routes from './routes';

import PipePackage from './pipe';
import ServicePackage from './service';
import ProviderPackage from './provider';

import AppComponent from './component/app';

import HomeComponent from './component/home';
import LoginComponent from './component/login';

import UsersModule from './module/users';
import IncidentsModule from './module/incidents';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(Routes),
    MaterialModule.forRoot(),
    AccountsModule,
    UsersModule,
    IncidentsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ...PipePackage
  ],
  providers: [
    ...ServicePackage,
    ...ProviderPackage
  ],
  bootstrap: [
    AppComponent
  ]
})
class AppModule 
{

}

export default AppModule;