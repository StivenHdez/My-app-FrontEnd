import { Component, OnInit} from '@angular/core';
import { PlanetasService } from 'src/app/services/planetas.service';
import { PlanetasInterface } from '../models/planeta.interface';

  import { from } from 'rxjs';

@Component({
  selector: 'app-fuselaje',
  templateUrl: './fuselaje.component.html',
  styleUrls: ['./fuselaje.component.css']
})
export class FuselajeComponent implements OnInit {

  constructor(private dataApi: PlanetasService) { }
  valplanetas: PlanetasInterface ={
  id:'',
  degrees:'',
  planeta:''
  };
  ngOnInit()  {
    this.getListPlanetas();
  }

  getListPlanetas(){
    this.dataApi.getAllPlanetas().subscribe(planetas =>console.log(planetas));
    
    this.dataApi.getAllPlanetas().subscribe(planetas => this.valplanetas = planetas);
  }



}
