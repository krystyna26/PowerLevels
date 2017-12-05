import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-super-sayan',
  templateUrl: './super-sayan.component.html',
  styleUrls: ['./super-sayan.component.css']
})
export class SuperSayanComponent {

  message :String = "";

  constructor() { }

  @Input() superPower;

}
