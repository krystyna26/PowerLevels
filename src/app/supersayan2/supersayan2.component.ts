import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-supersayan2',
  templateUrl: './supersayan2.component.html',
  styleUrls: ['./supersayan2.component.css']
})
export class Supersayan2Component{

  message :String = "";

  constructor() { }

  @Input() saiyan2Power;

}
