import { Component, OnInit } from '@angular/core';
import { PlanetasService } from 'src/app/services/planetas.service';
import { PlanetasInterface } from '../models/planeta.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataApi: PlanetasService) { }

  valplanetas: PlanetasInterface ={
    id:'',
    degrees:'',
    planeta:'',
    img:''
  };

  ngOnInit() {
  }

    getListOnePlaneta(){
    this.dataApi.getOnePlaneta().subscribe(planetas =>console.log(planetas));
    //  this.dataApi.getAllPlanetas().subscribe(planetas => this.valplanetas = planetas);;
    // this.dataApi.getAllPlanetas().subscribe(planetas => {
    //   console.log(planetas);}); 
      // console.log(planetas)
    }
}
