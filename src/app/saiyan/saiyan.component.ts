import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-saiyan',
  templateUrl: './saiyan.component.html',
  styleUrls: ['./saiyan.component.css']
})
export class SaiyanComponent {

  message :String = "";

  @Input() saiyanPower;

  constructor() { }

}
