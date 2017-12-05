import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-supersayan4',
  templateUrl: './supersayan4.component.html',
  styleUrls: ['./supersayan4.component.css']
})
export class Supersayan4Component{

  message :String = "";

  constructor() { 
  }

  @Input() saiyan4Power;
  
}
