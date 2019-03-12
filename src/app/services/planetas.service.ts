import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/internal/observable';

@Injectable({
  providedIn: 'root'
})

export class PlanetasService {

  constructor(private http:HttpClient) { }

  getAllPlanetas(){
  //  const url_api = "http://localhost:3000";
  const url_api = "/planetas";

   return this.http.get(url_api);   
  }

  // getOnePlaneta(){
  //   //  const url_api = "http://localhost:3000";
  //   const url_api = "/planetas/";
  
  //    return this.http.get(url_api);   
  //   }
}
