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

  filterPost = '';
  valplanetas: PlanetasInterface ={
  id:'',
  degrees:'',
  planeta:'',
  img:''
  };
  ngOnInit()  {
    this.getListPlanetas();
  }

  getListPlanetas(){
    this.dataApi.getAllPlanetas().subscribe(planetas => this.valplanetas = planetas);
  
  }
  
  getOnePlaneta(){
    let planetas = this.dataApi.getAllPlanetas();
    // let planeta = PlanetasInterface.filterPost();
  }


}
