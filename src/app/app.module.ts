
import { RouterModule, Routes } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlComponent } from './control/control.component';
import { HeaderComponent } from './header/header.component';
import { MotorComponent } from './motor/motor.component';
import { CabinaComponent } from './cabina/cabina.component';
import { FuselajeComponent } from './fuselaje/fuselaje.component';
import { HttpClientModule } from '@angular/common/http';

import {PlanetasService } from 'src/app/services/planetas.service';


const routes: Routes = [
  { path: 'control', component: ControlComponent },
  { path: 'motor', component: MotorComponent },
  { path: 'cabina', component: CabinaComponent },
  { path: 'fuselaje', component: FuselajeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ControlComponent,
    HeaderComponent,
    MotorComponent,
    CabinaComponent,
    FuselajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     RouterModule.forRoot(routes),
     HttpClientModule
  ],
  providers: [PlanetasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
