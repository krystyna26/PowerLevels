import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-human',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css']
})
export class HumanComponent{

  message :String = "";
  
  @Input() myPower;

  constructor() { }

}
