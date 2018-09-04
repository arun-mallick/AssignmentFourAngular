import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() startGameControl = new EventEmitter();
  clrInterval:any;
  
  constructor() { }

  ngOnInit() {
  }
  startGame(){
    let counter = 1;
    this.clrInterval = setInterval(()=>{
      counter++;
      this.startGameControl.emit(counter);
    }, 1000);
  }
  stopGame(){
    clearInterval(this.clrInterval);
  }

}
