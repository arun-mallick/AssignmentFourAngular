import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  element:any=[];
  
  startGame(val) {
    console.log(val);
    this.element.push({value:val})
  }

}
