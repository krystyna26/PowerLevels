import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-supersayan3',
  templateUrl: './supersayan3.component.html',
  styleUrls: ['./supersayan3.component.css']
})
export class Supersayan3Component  {

  message :String = "";
  
  constructor() { }

  @Input() saiyan3Power;

}
