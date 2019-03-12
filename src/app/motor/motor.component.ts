import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-motor',
  templateUrl: './motor.component.html',
  styleUrls: ['./motor.component.css'],
  template : '<section class="cabin" ><div class="counter" id="counter">{{segundos}}</div></section>  <div class="divmotor"><section class="motor"><button (click)="togglePause()" class="round-button">{{buttonLabel}}</button></section></div>'
})
export class MotorComponent implements OnInit {

  
minutos : number;
segundos:number;
isPaused:boolean;
buttonLabel:string;
 
constructor(){
  this.resetTimer();
  setInterval(()=>this.tick(),1000);
}
 
resetTimer():void{
  // this.minutos=24;
  this.segundos=10;
  this.buttonLabel= 'IGNITE';
  this.togglePause();
}

// stopTimer():void{
//   // this.minutos=24;
//   this.segundos=0;
// }


tick(): void{
  if(!this.isPaused){
    this.buttonLabel = "Detener";
  
if(--this.segundos < 0){
  // this.segundos = 59;
  // alert('Despegue!');
  // this.stopTimer();
  this.resetTimer();
  alert('Despegue!');
  // $('.panelControl').show(1000);
}
  }
}

togglePause(): void{
  this.isPaused = !this.isPaused;
  if(this.segundos<9){
    this.buttonLabel = this.isPaused ? 'Reanudar' : 'Detener';
  }
  
}

  ngOnInit() {
  }

}
